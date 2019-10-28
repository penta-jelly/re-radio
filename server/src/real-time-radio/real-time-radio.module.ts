import { Module } from '@nestjs/common';
import { RealTimeSongsModule } from './real-time-songs/real-time-songs.module';
import { RealTimeStationsModule } from './real-time-stations/real-time-stations.module';

@Module({
  imports: [RealTimeSongsModule, RealTimeStationsModule],
})
export class RealTimeRadioModule {}
