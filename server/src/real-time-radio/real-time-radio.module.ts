import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { LoggerModule } from '../core/logger/logger.module';
import { StationService } from '../radio/station/services/station.service';
import { StationModule } from '../radio/station/station.module';
import { RadioTypeOrmModule } from '../core/typeorm/typeorm.module';
import { RealTimeRadioController } from './real-time-radio.controller';
import { RealTimeSongsModule } from './real-time-songs/real-time-songs.module';
import { RealTimeStationsModule } from './real-time-stations/real-time-stations.module';

@Module({
  imports: [
    LoggerModule,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    RadioTypeOrmModule.forRoot(RealTimeRadioModule.name),
    StationModule,
    RealTimeSongsModule,
    RealTimeStationsModule,
  ],
  controllers: [RealTimeRadioController],
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
