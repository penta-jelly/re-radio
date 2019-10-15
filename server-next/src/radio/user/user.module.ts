import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from './entities/user-role.entity';
import { User } from './entities/user.entity';
import { UserRoleResolver } from './resolvers/user-role.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { UserRoleService } from './services/user-role.service';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole, User])],
  providers: [UserRoleService, UserService, UserRoleResolver, UserResolver],
  exports: [UserRoleService, UserService],
})
export class UserModule {}
