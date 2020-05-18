import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSubModule } from '../../core/pub-sub/pub-sub.module';
import { UserModule } from '../user/user.module';
import { StationSetting } from './entities/station-setting.entity';
import { StationTag } from './entities/station-tag.entity';
import { Station } from './entities/station.entity';
import { StationSubscriptionResolver } from './resolvers/station-subscription.resolver';
import { StationTagResolver } from './resolvers/station-tag.resolver';
import { StationResolver } from './resolvers/station.resolver';
import { StationSettingService } from './services/station-setting.service';
import { StationTagService } from './services/station-tag.service';
import { StationService } from './services/station.service';
import { StationSubscriber } from './station.subscriber';
import { StationSettingResolver } from './resolvers/station-setting.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Station, StationTag, StationSetting]),
    PubSubModule,
    forwardRef(() => UserModule),
  ],
  providers: [
    StationSubscriber,
    StationService,
    StationTagService,
    StationResolver,
    StationTagResolver,
    StationSettingService,
    StationSettingResolver,
    StationSubscriptionResolver,
  ],
  exports: [StationService, StationTagService, StationSettingService],
})
export class StationModule {}
