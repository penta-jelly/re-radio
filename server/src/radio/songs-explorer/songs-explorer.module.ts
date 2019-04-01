import { Module } from '@nestjs/common';
import { SongsExplorerResolver } from './songs-explorer.resolver';
import { SongsExplorerService } from './songs-explorer.service';
import { YoutubeModule } from './youtube/youtube.module';

@Module({
  imports: [YoutubeModule],
  providers: [SongsExplorerService, SongsExplorerResolver],
})
export class SongsExplorerModule {}
