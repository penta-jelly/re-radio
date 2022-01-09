import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSubModule } from '../../core/pub-sub/pub-sub.module';
import { StationModule } from '../station/station.module';
import { UserRole } from './entities/user-role.entity';
import { User } from './entities/user.entity';
import { UserRoleResolver } from './resolvers/user-role.resolver';
import { UserSubscriptionResolver } from './resolvers/user-subscription.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { UserRoleService } from './services/user-role.service';
import { UserService } from './services/user.service';
import { UserSubscriber } from './user.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole, User]), PubSubModule, forwardRef(() => StationModule)],
  providers: [UserSubscriber, UserRoleService, UserService, UserResolver, UserRoleResolver, UserSubscriptionResolver],
  exports: [UserRoleService, UserService],
})
export class UserModule {}
