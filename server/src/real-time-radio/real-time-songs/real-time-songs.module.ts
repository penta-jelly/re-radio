import { forwardRef, Module, OnModuleInit } from '@nestjs/common';
import { PubSubModule } from '../../core/pub-sub/pub-sub.module';
import { SongModule } from '../../radio/song/song.module';
import { StationModule } from '../../radio/station/station.module';
import { RealTimeStationsModule } from '../real-time-stations/real-time-stations.module';
import { RealTimeSongService } from './real-time-songs.service';
import { RealTimeSongsWorker } from './real-time-songs.worker';

@Module({
  imports: [PubSubModule, StationModule, SongModule, forwardRef(() => RealTimeStationsModule)],
  providers: [RealTimeSongsWorker, RealTimeSongService],
  exports: [RealTimeSongService],
})
export class RealTimeSongsModule implements OnModuleInit {
  constructor(private readonly songsService: RealTimeSongsWorker) {}
  async onModuleInit() {
    await this.songsService.scanAllPlayingSongsOnInitialization();
    this.songsService.subscribeSong();
  }
}
