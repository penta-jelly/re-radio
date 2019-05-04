import { forwardRef, Inject, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { Song, SongPreviousValues } from 'prisma/prisma.binding';
import { RealTimeStationService } from '../real-time-stations/real-time-stations.service';
import { RealTimeSongService } from './real-time-songs.service';

@Injectable()
export class RealTimeSongsWorkerService {
  /**
   * @description A hash map store the current timeout instance of a station.
   * This will be use to interrupt the current playing song of station
   */
  private playersMap: { [key: string]: NodeJS.Timeout } = {};

  private readonly logger = new Logger(RealTimeSongsWorkerService.name);
  constructor(
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

    const startedAtDate = song.startedAt instanceof Date ? song.startedAt : new Date(song.startedAt);
    const startedAt = startedAtDate.getTime();
    const now = Date.now();
    const duration = song.duration - (now - startedAt);
    if (duration <= 0) {
      await this.updatePlayedSongAndPlayNextSong(song);
    } else {
      this.logger.debug(`Song [${song.id}] will be timed out in ${duration} milliseconds`);
      this.playersMap[song.station.id] = setTimeout(() => this.updatePlayedSongAndPlayNextSong(song), duration);
    }
  }

  protected async updatePlayedSongAndPlayNextSong(song: Song) {
    await this.realTimeSongService.updateSongStatusToPlayed(song.id);
    delete this.playersMap[song.station.id];
    let nextSong = await this.realTimeSongService.findNextPlayingSongInStation(song.station.id);
    if (nextSong) {
      nextSong = await this.realTimeSongService.updateSongStatusToPlaying(nextSong.id);
    }
  }

  /**
   * @description: Subscribe song event from Prisma to decide what is the next action
   */
  async subscribeSong() {
    const subscription = await this.realTimeSongService.getSongSubscription();
    while (true) {
      const { value } = await subscription.next();
      const { song } = value;
      switch (song.mutation) {
        case 'CREATED':
          await this.onSongCreated(song.node);
          break;
        case 'UPDATED':
          await this.onSongUpdated(song.node, song.previousValues);
          break;
        case 'DELETED':
          await this.onSongDeleted(song.node);
          break;
      }
    }
  }

  protected async onSongCreated(song: Song) {
    this.logger.debug(`Song [${song.id}] "${song.title}" in station [${song.station.id}] has been created`);
    if (await this.realTimeStationService.isStationReadyToPlayNextSong(song.station.id)) {
      const nextPlayingSong = await this.realTimeSongService.findNextPlayingSongInStation(song.station.id);
      await this.realTimeSongService.updateSongStatusToPlaying(nextPlayingSong.id);
    }
  }

  protected async onSongUpdated(song: Song, previousValues: SongPreviousValues) {
    this.logger.debug(
      `Song [${song.id}] "${song.title}" in station [${song.station.id}] has been updated with status ${song.status}`,
    );
    if (song.status === 'PLAYING' && previousValues.status !== song.status) {
      clearTimeout(this.playersMap[song.station.id]);
      delete this.playersMap[song.station.id];
      await this.playSong(song);
    }
  }

  protected async onSongDeleted(song: Song) {
    this.logger.debug(`Song [${song.id}] "${song.title}" in station [${song.station.id}] has been deleted`);
    if (song.status === 'PLAYING') {
      clearTimeout(this.playersMap[song.station.id]);
      delete this.playersMap[song.station.id];
    }
  }
}
