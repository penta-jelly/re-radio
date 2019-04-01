import { Module } from '@nestjs/common';
import { ConfigModule } from '../../core/config/config.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { SongsResolver } from './songs.resolver';
import { SongsService } from './songs.service';

@Module({
  imports: [ConfigModule, PrismaModule, AuthModule],
  providers: [SongsResolver, SongsService, SongsService],
  exports: [SongsService],
})
export class SongsModule {}
