import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongCache } from './entities/song-cache.entity';
import { SongCacheService } from './song-cache.service';

@Module({
  imports: [TypeOrmModule.forFeature([SongCache])],
  providers: [SongCacheService],
  exports: [SongCacheService],
})
export class SongCacheModule {}
