import { forwardRef, Inject, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { PubSub } from 'core/pub-sub/pub-sub.service';
import { EntitySubscription, MutationEnum } from 'core/typeorm/entity-subscription.interface';
import { Song, SongStatusEnum } from 'radio/song/entities/song.entity';
import { SONG_SUBSCRIPTION } from 'radio/song/song.subscriber';
import { RealTimeStationService } from '../real-time-stations/real-time-stations.service';
import { RealTimeSongService } from './real-time-songs.service';

@Injectable()
export class RealTimeSongsWorkerService {
  /**
   * @description A hash map store the current timeout instance of a station.
   * This will be use to interrupt the current playing song of station
   */
  private playersMap: { [key: string]: { timer: NodeJS.Timeout; song: Song } | undefined } = {};

  private readonly logger = new Logger(RealTimeSongsWorkerService.name);
  constructor(
    private readonly pubSub: PubSub,
    private readonly realTimeSongService: RealTimeSongService,
    @Inject(forwardRef(() => RealTimeStationService))
    private readonly realTimeStationService: RealTimeStationService,
  ) {}

  /**
   * @description: Scan all songs which has **PLAYING** status to update the player status on module initialization
   */
  async scanAllPlayingSongsOnInitialization() {
    const songs = await this.realTimeSongService.findAllPlayingSongs();
    await Promise.all(songs.map(song => this.playSong(song)));
  }

  protected async playSong(song: Song) {
    if (!song.startedAt) {
      throw new InternalServerErrorException(`Song does not include property startedAt`);
    }

    const startedAt = song.startedAt.getTime();
    const now = Date.now();
    const duration = song.duration - (now - startedAt);
    if (duration <= 0) {
      await this.updatePlayedSongAndPlayNextSong(song);
    } else {
      this.logger.debug(`Song [${song.id}] "${song.title}" will be timed out in ${duration} milliseconds`);
      this.playersMap[song.stationSlug] = {
        timer: global.setTimeout(() => this.updatePlayedSongAndPlayNextSong(song), duration),
        song,
      };
    }
  }

  protected async updatePlayedSongAndPlayNextSong(song: Song) {
    await this.realTimeSongService.updateSongStatusToPlayed(song.id);
    delete this.playersMap[song.stationSlug];
    setTimeout(async () => {
      const nextSong = await this.realTimeSongService.findNextPlayingSongInStation(song.stationSlug);
      nextSong && (await this.realTimeSongService.updateSongStatusToPlaying(nextSong.id));
    }, 3000);
  }

  async subscribeSong() {
    await this.pubSub.subscribe(SONG_SUBSCRIPTION, async (payload: EntitySubscription<Song>) => {
      const { entity, mutation } = payload;
      switch (mutation) {
        case MutationEnum.CREATED:
          await this.onSongCreated(entity);
          break;
        case MutationEnum.UPDATED:
          await this.onSongUpdated(entity);
          break;
        case MutationEnum.DELETED:
          await this.onSongDeleted(entity);
          break;
      }
    });
  }

  protected async onSongCreated(song: Song) {
    this.logger.debug(`Song [${song.id}] "${song.title}" in station [${song.stationSlug}] has been created`);
    if (await this.realTimeStationService.isStationReadyToPlayNextSong(song.stationSlug)) {
      const nextPlayingSong = await this.realTimeSongService.findNextPlayingSongInStation(song.stationSlug);
      if (nextPlayingSong) {
        await this.realTimeSongService.updateSongStatusToPlaying(nextPlayingSong.id);
      }
    }
  }

  protected async onSongUpdated(song: Song) {
    this.logger.debug(
      `Song [${song.id}] "${song.title}" in station [${song.stationSlug}] has been updated with status ${song.status}`,
    );
    const playerInstance = this.playersMap[song.stationSlug];
    if (!playerInstance) {
      await this.playSong(song);
    } else if (song.status === SongStatusEnum.PLAYING && playerInstance.song.id !== song.id) {
      clearTimeout(playerInstance.timer);
      delete this.playersMap[song.stationSlug];
      await this.playSong(song);
    }
  }

  protected async onSongDeleted(song: Song) {
    this.logger.debug(`Song [${song.id}] "${song.title}" in station [${song.stationSlug}] has been deleted`);
    const playerInstance = this.playersMap[song.stationSlug];
    if (!playerInstance) return;
    if (song.status === SongStatusEnum.PLAYING) {
      clearTimeout(playerInstance.timer);
      delete this.playersMap[song.stationSlug];
    }
  }
}
