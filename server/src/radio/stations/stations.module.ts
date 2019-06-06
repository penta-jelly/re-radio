import { Module } from '@nestjs/common';
import { ConfigModule } from 'core/config/config.module';
import { PrismaModule } from 'prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { StationsResolver } from './stations.resolver';
import { StationsService } from './stations.service';

@Module({
  imports: [ConfigModule, PrismaModule, UsersModule, AuthModule],
  providers: [StationsResolver, StationsService, StationsService],
  exports: [StationsService],
})
export class StationsModule {}
