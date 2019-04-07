import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Song, SongSubscriptionPayload, SongSubscriptionWhereInput, SongStatusEnum } from '../../prisma/prisma.binding';

@Injectable()
export class RealTimeSongUtilsService {
  private readonly logger = new Logger(RealTimeSongUtilsService.name);
  constructor(private readonly prisma: PrismaService) {}

  async getSongSubscription(args?: { where?: SongSubscriptionWhereInput }) {
    const info = `{
      mutation
      node ${this.query}
    }`;
    return this.prisma.subscription.song<{ song: SongSubscriptionPayload }>(args, info);
  }

  /**
   * TODO: Implement an algorithm to figure out which song will be played next
   */
  async findNextPlayingSongInStation(stationId: string): Promise<Song | null> {
    const pendingSongs = await this.prisma.query.songs(
      { where: { station: { id: stationId }, status: 'PENDING' } },
      this.query,
    );
    if (pendingSongs.length > 0) {
      return pendingSongs[0];
    }
    return null;
  }

  async findAllPlayingSongs() {
    return this.prisma.query.songs({ where: { status: 'PLAYING' } }, this.query);
  }

  async findPlayingSongInStation(stationId: string): Promise<Song | null> {
    const playingSongs = await this.prisma.query.songs(
      { where: { station: { id: stationId }, status: 'PLAYING' } },
      this.query,
    );
    if (playingSongs.length > 0) {
      return playingSongs[0];
    }
    return null;
  }

  async findSongOrFail(songId: string): Promise<Song> {
    const song = await this.prisma.query.song({ where: { id: songId } }, this.query);
    if (!song) {
      throw new InternalServerErrorException(`Song ${songId} not found`);
    }
    return song;
  }

  async updateSongStatusToPlaying(songId: string) {
    const startedAt = new Date();
    return this.prisma.mutation.updateSong(
      { where: { id: songId }, data: { status: 'PLAYING', startedAt } },
      this.query,
    );
  }

  async updateSongStatusToPlayed(songId: string) {
    return this.prisma.mutation.updateSong({ where: { id: songId }, data: { status: 'PLAYED' } }, this.query);
  }

  private query = `{
    id createdAt updatedAt title url thumbnail duration status startedAt
    creator { id }
    station { id }
    upVotes { id }
    downVotes { id }
  }`;
}
