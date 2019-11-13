import { Module, ValidationPipe, Logger } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { RadioExceptionFilter } from 'core/exception.filter';
import { FilesModule } from 'core/files/files.module';
import { RadioGraphqlModule } from 'core/graphql/graphql.module';
import { RequestsInterceptor } from 'core/request.interceptor';
import { RadioTypeOrmModule } from 'core/typeorm/typeorm.module';
import { StaticModule } from 'core/static/static.module';
import { AuthModule } from './auth/auth.module';
import { RadioController } from './radio.controller';
import { SongModule } from './song/song.module';
import { SongsExplorerModule } from './songs-explorer/songs-explorer.module';
import { StationModule } from './station/station.module';
import { UserModule } from './user/user.module';
import { StationService } from './station/services/station.service';

@Module({
  imports: [
    StaticModule,
    RadioTypeOrmModule,
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
export class RadioModule {
  private readonly logger = new Logger(StationModule.name);
  constructor(private readonly stationService: StationService) {}

  async onModuleInit() {
    this.logger.log('Start cleaning online users.');
    await this.stationService.cleanStationOnlineUsers();
    this.logger.log('Finish cleaning online users.');
  }
}
