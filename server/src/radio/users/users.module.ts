import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from 'core/config/config.module';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from 'radio/auth/auth.module';
import { UsersService } from './user.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [ConfigModule, PrismaModule, forwardRef(() => AuthModule)],
  providers: [UsersResolver, UsersService, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
