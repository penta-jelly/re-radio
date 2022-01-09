import { Module } from '@nestjs/common';
import { ConfigModule } from '../../../core/config/config.module';
import { ExternalApiCacheModule } from '../cache/external-api-cache.module';
import { YoutubeResolver } from './youtube.resolver';
import { YoutubeService } from './youtube.service';

@Module({
  imports: [ConfigModule, ExternalApiCacheModule],
  providers: [YoutubeService, YoutubeResolver],
  exports: [YoutubeService],
})
export class YoutubeModule {}
