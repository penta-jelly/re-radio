import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '../../core/config/config.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { StationsService } from './stations.service';
import { StationsResolver } from './stations.resolver';

@Module({
  imports: [ConfigModule, PrismaModule, forwardRef(() => AuthModule)],
  providers: [StationsResolver, StationsService, StationsService],
  exports: [StationsService],
})
export class StationsModule {}
