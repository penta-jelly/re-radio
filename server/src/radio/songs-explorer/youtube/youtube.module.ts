import { Module } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { ConfigModule } from '../../../core/config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [YoutubeService],
  exports: [YoutubeService],
})
export class YoutubeModule {}
