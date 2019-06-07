import { Module } from '@nestjs/common';
import { ConfigModule } from 'core/config/config.module';
import { PrismaModule } from 'prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { StationTagsResolver } from 'radio/station-tags/station-tags.resolver';
import { StationTagsService } from 'radio/station-tags/station-tags.service';

@Module({
  imports: [ConfigModule, PrismaModule, UsersModule, AuthModule],
  providers: [StationTagsResolver, StationTagsService, StationTagsService],
  exports: [StationTagsService],
})
export class StationTagsModule {}
