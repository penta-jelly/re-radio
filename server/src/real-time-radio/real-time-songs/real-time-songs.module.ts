import { forwardRef, Module, OnModuleInit } from '@nestjs/common';
import { PubSubModule } from 'core/pub-sub/pub-sub.module';
import { RadioTypeOrmModule } from 'core/typeorm/typeorm.module';
import { SongModule } from 'radio/song/song.module';
import { StationModule } from 'radio/station/station.module';
import { RealTimeStationsModule } from '../real-time-stations/real-time-stations.module';
import { RealTimeSongsWorkerService } from './real-time-songs-worker.service';
import { RealTimeSongService } from './real-time-songs.service';

@Module({
  imports: [RadioTypeOrmModule, PubSubModule, StationModule, SongModule, forwardRef(() => RealTimeStationsModule)],
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
