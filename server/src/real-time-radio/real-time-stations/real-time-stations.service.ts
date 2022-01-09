import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { SongStatusEnum } from '../../radio/song/entities/song.entity';
import { SongService } from '../../radio/song/services/song.service';
import { StationService } from '../../radio/station/services/station.service';
import { RealTimeSongService } from '../real-time-songs/real-time-songs.service';

@Injectable()
export class RealTimeStationService {
  private readonly logger = new Logger(RealTimeStationService.name);
  constructor(
    private readonly stationService: StationService,
    private readonly songService: SongService,
    @Inject(forwardRef(() => RealTimeSongService))
    private readonly realTimeSongService: RealTimeSongService,
  ) {}

  async findAllAvailableStations() {
    return this.stationService.find({});
  }

  async isStationReadyToPlayNextSong(stationSlug: string) {
    const playingSong = await this.realTimeSongService.findPlayingSongInStation(stationSlug);
    if (playingSong) {
      return false;
    }

    // Workaround for the case where the event is emitted before the save operation
    await new Promise((resolve) => setTimeout(resolve, 0));
    const count = await this.songService.count({ where: { stationSlug, status: SongStatusEnum.PENDING } });
    if (count === 0) {
      return false;
    }
    return true;
  }
}
