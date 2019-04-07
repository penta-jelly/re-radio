import { Module, ValidationPipe } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { GraphqlModule } from '../core/graphql/graphql.module';
import { RequestsInterceptor } from '../core/request.interceptor';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { RadioController } from './radio.controller';
import { SongsExplorerModule } from './songs-explorer/songs-explorer.module';
import { SongsModule } from './songs/songs.module';
import { StationsModule } from './stations/stations.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [GraphqlModule, PrismaModule, UsersModule, AuthModule, StationsModule, SongsModule, SongsExplorerModule],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ transform: true }),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestsInterceptor,
    },
  ],
  controllers: [RadioController],
})
export class RadioModule {}
