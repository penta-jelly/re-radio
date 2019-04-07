import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RealTimeSongsModule } from './real-time-songs/real-time-songs.module';
import { RealTimeStationsModule } from './real-time-stations/real-time-stations.module';

@Module({
  imports: [PrismaModule, RealTimeSongsModule, RealTimeStationsModule],
})
export class RealTimeRadioModule {}
