import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSubModule } from 'core/pub-sub/pub-sub.module';
import { StationModule } from 'radio/station/station.module';
import { UserModule } from 'radio/user/user.module';
import { Song } from './entities/song.entity';
import { SongSubscriptionResolver } from './resolvers/song-subscription.resolver';
import { SongResolver } from './resolvers/song.resolver';
import { SongService } from './services/song.service';
import { SongSubscriber } from './song.subscriber';
import { HistorySongResolver } from './resolvers/history-song.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Song]),
    PubSubModule,
    forwardRef(() => UserModule),
    forwardRef(() => StationModule),
  ],
  providers: [SongSubscriber, SongService, SongResolver, HistorySongResolver, SongSubscriptionResolver],
  exports: [SongService],
})
export class SongModule {}
