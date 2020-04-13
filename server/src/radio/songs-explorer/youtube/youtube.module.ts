import { Module } from '@nestjs/common';
import { ConfigModule } from '../../../core/config/config.module';
import { YoutubeResolver } from './youtube.resolver';
import { YoutubeService } from './youtube.service';

@Module({
  imports: [ConfigModule],
  providers: [YoutubeService, YoutubeResolver],
  exports: [YoutubeService],
})
export class YoutubeModule {}
