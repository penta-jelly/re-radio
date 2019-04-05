import { Module, ValidationPipe } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { GraphqlModule } from './core/graphql/graphql.module';
import { RequestsInterceptor } from './core/request.interceptor';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './radio/auth/auth.module';
import { SongsExplorerModule } from './radio/songs-explorer/songs-explorer.module';
import { SongsModule } from './radio/songs/songs.module';
import { StationsModule } from './radio/stations/stations.module';
import { UsersModule } from './radio/users/users.module';

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
  controllers: [AppController],
})
export class ApplicationModule {}
