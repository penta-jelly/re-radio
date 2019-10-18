import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSubModule } from 'core/pub-sub/pub-sub.module';
import { StationModule } from 'radio/station/station.module';
import { UserRole } from './entities/user-role.entity';
import { User } from './entities/user.entity';
import { UserSubscriber } from './entities/user.subscriber';
import { UserRoleResolver } from './resolvers/user-role.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { UserRoleService } from './services/user-role.service';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole, User]), PubSubModule, forwardRef(() => StationModule)],
  providers: [UserSubscriber, UserRoleService, UserService, UserRoleResolver, UserResolver],
  exports: [UserRoleService, UserService],
})
export class UserModule {}
