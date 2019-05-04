import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RealTimeSongService } from '../real-time-songs/real-time-songs.service';

@Injectable()
export class RealTimeStationService {
  private readonly logger = new Logger(RealTimeStationService.name);
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => RealTimeSongService))
    private readonly realTimeSongService: RealTimeSongService,
  ) {}

  async findAllAvailableStations(query?: string) {
    return this.prisma.query.stations({}, query || `{ id name slug description createdAt updatedAt }`);
  }

  async isStationReadyToPlayNextSong(stationId: string) {
    const playingSong = await this.realTimeSongService.findPlayingSongInStation(stationId);
    if (playingSong) {
      return false;
    }

    const pendingSongs = await this.prisma.query.songs({ where: { station: { id: stationId }, status: 'PENDING' } });
    if (pendingSongs.length === 0) {
      return false;
    }
    return true;
  }
}
