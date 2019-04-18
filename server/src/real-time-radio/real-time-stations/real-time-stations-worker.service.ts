import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { RealTimeSongService } from '../real-time-songs/real-time-songs.service';
import { RealTimeStationService } from './real-time-stations.service';

@Injectable()
export class RealTimeStationsWorkerService {
  private readonly logger = new Logger(RealTimeStationsWorkerService.name);
  constructor(
    private readonly realTimeStationService: RealTimeStationService,
    @Inject(forwardRef(() => RealTimeSongService))
    private readonly realTimeSongService: RealTimeSongService,
  ) {}

  async scanAllStationsOnInitialization() {
    const stations = await this.realTimeStationService.findAllAvailableStations(`{ id }`);
    await Promise.all(
      stations.map(async station => {
        if (await this.realTimeStationService.isStationReadyToPlayNextSong(station.id)) {
          const nextPlayingSong = await this.realTimeSongService.findNextPlayingSongInStation(station.id);
          await this.realTimeSongService.updateSongStatusToPlaying(nextPlayingSong.id);
        }
      }),
    );
  }
}
