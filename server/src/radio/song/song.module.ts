import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSubModule } from 'core/pub-sub/pub-sub.module';
import { Song } from 'radio/song/entities/song.entity';
import { SongSubscriptionResolver } from 'radio/song/resolvers/song-subscription.resolver';
import { SongResolver } from 'radio/song/resolvers/song.resolver';
import { SongService } from 'radio/song/services/song.service';
import { SongSubscriber } from 'radio/song/song.subscriber';
import { StationModule } from 'radio/station/station.module';
import { UserModule } from 'radio/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Song]),
    PubSubModule,
    forwardRef(() => UserModule),
    forwardRef(() => StationModule),
  ],
  providers: [SongSubscriber, SongService, SongResolver, SongSubscriptionResolver],
  exports: [SongService],
})
export class SongModule {}
