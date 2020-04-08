import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { StationService } from 'radio/station/services/station.service';
import { StationModule } from 'radio/station/station.module';
import { LoggerModule } from 'core/logger/logger.module';
import { RealTimeSongsModule } from './real-time-songs/real-time-songs.module';
import { RealTimeStationsModule } from './real-time-stations/real-time-stations.module';

@Module({
  imports: [LoggerModule, StationModule, RealTimeSongsModule, RealTimeStationsModule],
})
export class RealTimeRadioModule implements OnModuleInit {
  private readonly logger: Logger = new Logger(RealTimeRadioModule.name);
  constructor(private readonly stationService: StationService) {}

  async onModuleInit() {
    this.logger.log('Start cleaning online users.');
    await this.stationService.cleanStationOnlineUsers();
    this.logger.log('Finish cleaning online users.');
  }
}
