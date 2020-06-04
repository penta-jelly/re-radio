import { Injectable, Logger } from '@nestjs/common';
import { sortSongs } from 're-radio-common/lib/sort-songs';
import { Song, SongStatusEnum } from '../../radio/song/entities/song.entity';
import { SongService } from '../../radio/song/services/song.service';
import { StationService } from '../../radio/station/services/station.service';

@Injectable()
export class RealTimeSongService {
  private readonly logger = new Logger(RealTimeSongService.name);
  constructor(private readonly songService: SongService, private readonly stationService: StationService) {}

  async findNextPlayingSongInStation(stationSlug: string): Promise<Song | null> {
    const songs = await this.songService.find({
      where: { stationSlug, status: SongStatusEnum.PENDING },
    });
    if (songs.length > 0) {
      const sortedSongs = sortSongs(songs);
      return sortedSongs[0];
    }
    return null;
  }

  async findAllPlayingSongs() {
    return await this.songService.find({
      where: { status: SongStatusEnum.PLAYING },
    });
  }

  async findPlayingSongInStation(stationSlug: string): Promise<Song | undefined> {
    return await this.songService.findOne({
      where: { stationSlug, status: SongStatusEnum.PLAYING },
    });
  }

  async updateSongStatusToPlaying(songId: number) {
    const startedAt = new Date();
    const song = await this.songService.update({ id: songId }, { status: SongStatusEnum.PLAYING, startedAt });
    await this.stationService.update({ slug: song.stationSlug }, { playingSong: song });
    return song;
  }

  async updateSongStatusToPlayed(songId: number) {
    const song = await this.songService.update({ id: songId }, { status: SongStatusEnum.PLAYED });
    await this.stationService.update({ slug: song.stationSlug }, { playingSong: null });
    return song;
  }
}
