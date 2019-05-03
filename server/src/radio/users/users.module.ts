import { forwardRef, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '../../core/config/config.module';
import { FilesModule } from '../../core/files/files.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { UserPasswordGuard } from './guards/UserPassword.guard';
import { UsersService } from './user.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [ConfigModule, PrismaModule, FilesModule, forwardRef(() => AuthModule)],
  providers: [
    {
      provide: APP_GUARD,
      useClass: UserPasswordGuard,
    },
    UsersResolver,
    UsersService,
    UsersService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
