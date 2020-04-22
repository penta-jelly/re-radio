import { Module } from '@nestjs/common';
import { ConfigModule } from '../../../core/config/config.module';
import { SongCacheModule } from '../cache/song-cache.module';
import { YoutubeResolver } from './youtube.resolver';
import { YoutubeService } from './youtube.service';

@Module({
  imports: [ConfigModule, SongCacheModule],
  providers: [YoutubeService, YoutubeResolver],
  exports: [YoutubeService],
})
export class YoutubeModule {}
