import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { Song } from '../../prisma/prisma.binding';
import { RealTimeSongUtilsService } from './real-time-song-utils.service';

@Injectable()
export class RealTimeSongsService {
  /**
   * @description A hash map store the current timeout instance of a station.
   * This will be use to interrupt the current playing song of station
   */
  private playersMap: { [key: string]: NodeJS.Timeout } = {};

  private readonly logger = new Logger(RealTimeSongsService.name);
  constructor(private readonly utils: RealTimeSongUtilsService) {}

  /**
   * @description: Subscribe song event from Prisma to catch what event to do next
   */
  async subscribeSong() {
    const subscription = await this.utils.getSongSubscription();
    while (true) {
      const { value } = await subscription.next();
      const { song } = value;
      switch (song.mutation) {
        case 'CREATED':
          await this.onSongCreated(song.node);
          break;
        case 'UPDATED':
          await this.onSongUpdated(song.node);
          break;
        case 'DELETED':
          await this.onSongDeleted(song.node);
          break;
      }
    }
  }

  /**
   * @description: Scan all songs which has **PLAYING** status to update the player status on module initialization
   */
  async scanAllPlayingSongsOnInitialization() {
    const songs = await this.utils.findAllPlayingSongs();
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
    await this.utils.updateSongStatusToPlayed(song.id);
    delete this.playersMap[song.station.id];
    let nextSong = await this.utils.findNextPlayingSongInStation(song.station.id);
    if (nextSong) {
      nextSong = await this.utils.updateSongStatusToPlaying(nextSong.id);
      this.playSong(nextSong);
    }
  }

  protected async onSongCreated(song: Song) {
    this.logger.debug(`Song [${song.id}] "${song.title}" in station [${song.station.id}] has been created`);
    const playingSong = await this.utils.findPlayingSongInStation(song.station.id);
    if (!playingSong) {
      song = await this.utils.updateSongStatusToPlaying(song.id);
      await this.playSong(song);
    }
  }

  protected async onSongUpdated(song: Song) {
    this.logger.debug(
      `Song [${song.id}] "${song.title}" in station [${song.station.id}] has been updated with status ${song.status}`,
    );
  }

  protected async onSongDeleted(song: Song) {
    this.logger.debug(`Song [${song.id}] "${song.title}" in station [${song.station.id}] has been deleted`);
    if (song.status === 'PLAYING') {
      clearTimeout(this.playersMap[song.station.id]);
      delete this.playersMap[song.station.id];
    }
  }
}
