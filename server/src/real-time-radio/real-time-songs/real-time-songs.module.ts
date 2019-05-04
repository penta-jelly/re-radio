import { forwardRef, Module, OnModuleInit } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { RealTimeStationsModule } from '../real-time-stations/real-time-stations.module';
import { RealTimeSongsWorkerService } from './real-time-songs-worker.service';
import { RealTimeSongService } from './real-time-songs.service';

@Module({
  imports: [PrismaModule, forwardRef(() => RealTimeStationsModule)],
  providers: [RealTimeSongsWorkerService, RealTimeSongService],
  exports: [RealTimeSongService],
})
export class RealTimeSongsModule implements OnModuleInit {
  constructor(private readonly songsService: RealTimeSongsWorkerService) {}
  async onModuleInit() {
    await this.songsService.scanAllPlayingSongsOnInitialization();
    this.songsService.subscribeSong();
  }
}
