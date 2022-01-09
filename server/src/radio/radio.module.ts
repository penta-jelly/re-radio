import { Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { RadioExceptionFilter } from '../core/exception.filter';
import { FilesModule } from '../core/files/files.module';
import { RadioGraphqlModule } from '../core/graphql/graphql.module';
import { LoggerModule } from '../core/logger/logger.module';
import { RequestsInterceptor } from '../core/request.interceptor';
import { StaticModule } from '../core/static/static.module';
import { RadioTypeOrmModule } from '../core/typeorm/typeorm.module';
import { AuthModule } from './auth/auth.module';
import { RadioController } from './radio.controller';
import { SongModule } from './song/song.module';
import { SongsExplorerModule } from './songs-explorer/songs-explorer.module';
import { StationModule } from './station/station.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    LoggerModule,
    StaticModule,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    RadioTypeOrmModule.forRoot(RadioModule.name),
    RadioGraphqlModule,
    FilesModule,
    SongsExplorerModule,
    UserModule,
    AuthModule,
    StationModule,
    SongModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ transform: true }),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestsInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: RadioExceptionFilter,
    },
  ],
  controllers: [RadioController],
})
export class RadioModule {}
