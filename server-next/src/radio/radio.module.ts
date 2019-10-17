import { Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { RadioExceptionFilter } from 'core/exception.filter';
import { FilesModule } from 'core/files/files.module';
import { RadioGraphqlModule } from 'core/graphql/graphql.module';
import { RequestsInterceptor } from 'core/request.interceptor';
import { RadioTypeOrmModule } from 'core/typeorm/typeorm.module';
import { AuthModule } from 'radio/auth/auth.module';
import { SongsExplorerModule } from 'radio/songs-explorer/songs-explorer.module';
import { StationModule } from 'radio/station/station.module';
import { RadioController } from './radio.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    RadioTypeOrmModule,
    RadioGraphqlModule,
    FilesModule,
    SongsExplorerModule,
    UserModule,
    AuthModule,
    StationModule,
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
