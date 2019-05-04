import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { RealTimeSongsModule } from '../real-time-songs/real-time-songs.module';
import { RealTimeStationsWorkerService } from './real-time-stations-worker.service';
import { RealTimeStationService } from './real-time-stations.service';

@Module({
  imports: [PrismaModule, forwardRef(() => RealTimeSongsModule)],
  providers: [RealTimeStationsWorkerService, RealTimeStationService],
  exports: [RealTimeStationService],
})
export class RealTimeStationsModule {
  constructor(private readonly realTimeStationsService: RealTimeStationsWorkerService) {}
  async onModuleInit() {
    await this.realTimeStationsService.scanAllStationsOnInitialization();
  }
}
