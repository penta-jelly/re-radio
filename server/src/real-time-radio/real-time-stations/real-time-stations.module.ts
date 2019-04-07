import { Module } from '@nestjs/common';
import { RealTimeStationsService } from './real-time-stations.service';

@Module({
  providers: [RealTimeStationsService]
})
export class RealTimeStationsModule {}
