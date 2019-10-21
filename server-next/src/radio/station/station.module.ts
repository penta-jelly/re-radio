import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSubModule } from 'core/pub-sub/pub-sub.module';
import { UserModule } from 'radio/user/user.module';
import { StationTag } from './entities/station-tag.entity';
import { Station } from './entities/station.entity';
import { StationSubscriptionResolver } from './resolvers/station-subscription.resolver';
import { StationTagResolver } from './resolvers/station-tag.resolver';
import { StationResolver } from './resolvers/station.resolver';
import { StationTagService } from './services/station-tag.service';
import { StationService } from './services/station.service';
import { StationSubscriber } from './station.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Station, StationTag]), PubSubModule, forwardRef(() => UserModule)],
  providers: [
    StationSubscriber,
    StationService,
    StationTagService,
    StationResolver,
    StationTagResolver,
    StationSubscriptionResolver,
  ],
  exports: [StationService, StationTagService],
})
export class StationModule {}
