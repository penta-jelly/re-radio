import { Module, OnModuleInit } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { RealTimeSongUtilsService } from './real-time-song-utils.service';
import { RealTimeSongsService } from './real-time-songs.service';

@Module({
  imports: [PrismaModule],
  providers: [RealTimeSongsService, RealTimeSongUtilsService],
})
export class RealTimeSongsModule implements OnModuleInit {
  constructor(private readonly songsService: RealTimeSongsService) {}
  async onModuleInit() {
    await this.songsService.scanAllPlayingSongsOnInitialization();
    this.songsService.subscribeSong();
  }
}
