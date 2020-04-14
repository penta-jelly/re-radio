import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSubModule } from '../../core/pub-sub/pub-sub.module';
import { StationModule } from '../station/station.module';
import { UserModule } from '../user/user.module';
import { Song } from './entities/song.entity';
import { HistorySongResolver } from './resolvers/history-song.resolver';
import { SongSubscriptionResolver } from './resolvers/song-subscription.resolver';
import { SongResolver } from './resolvers/song.resolver';
import { SongService } from './services/song.service';
import { SongSubscriber } from './song.subscriber';

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
