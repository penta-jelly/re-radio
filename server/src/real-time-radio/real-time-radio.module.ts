import { Module, Logger } from '@nestjs/common';
import { StationService } from 'radio/station/services/station.service';
import { StationModule } from 'radio/station/station.module';
import { RealTimeStationsModule } from './real-time-stations/real-time-stations.module';
import { RealTimeSongsModule } from './real-time-songs/real-time-songs.module';

@Module({
  imports: [StationModule, RealTimeSongsModule, RealTimeStationsModule],
})
export class RealTimeRadioModule {
  private readonly logger = new Logger(RealTimeRadioModule.name);
  constructor(private readonly stationService: StationService) {}

  async onModuleInit() {
    this.logger.log('Start cleaning online users.');
    await this.stationService.cleanStationOnlineUsers();
    this.logger.log('Finish cleaning online users.');
  }
}
