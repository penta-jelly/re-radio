import { forwardRef, Module, OnModuleInit } from '@nestjs/common';
import { PubSubModule } from 'core/pub-sub/pub-sub.module';
import { RadioTypeOrmModule } from 'core/typeorm/typeorm.module';
import { SongModule } from 'radio/song/song.module';
import { StationModule } from 'radio/station/station.module';
import { RealTimeSongsModule } from '../real-time-songs/real-time-songs.module';
import { RealTimeStationsWorkerService } from './real-time-stations-worker.service';
import { RealTimeStationService } from './real-time-stations.service';

@Module({
  imports: [RadioTypeOrmModule, PubSubModule, StationModule, SongModule, forwardRef(() => RealTimeSongsModule)],
  providers: [RealTimeStationsWorkerService, RealTimeStationService],
  exports: [RealTimeStationService],
})
export class RealTimeStationsModule implements OnModuleInit {
  constructor(private readonly realTimeStationsService: RealTimeStationsWorkerService) {}
  async onModuleInit() {
    await this.realTimeStationsService.scanAllStationsOnInitialization();
  }
}
