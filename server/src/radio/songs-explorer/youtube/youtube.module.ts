import { Module } from '@nestjs/common';
import { ConfigModule } from 'core/config/config.module';
import { YoutubeService } from './youtube.service';

@Module({
  imports: [ConfigModule],
  providers: [YoutubeService],
  exports: [YoutubeService],
})
export class YoutubeModule {}
