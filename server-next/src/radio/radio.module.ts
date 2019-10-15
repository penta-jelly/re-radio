import { Module, ValidationPipe } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { FilesModule } from 'core/files/files.module';
import { RadioGraphqlModule } from 'core/graphql/graphql.module';
import { RequestsInterceptor } from 'core/request.interceptor';
import { RadioTypeOrmModule } from 'core/typeorm/typeorm.module';
import { AuthModule } from 'radio/auth/auth.module';
import { SongsExplorerModule } from 'radio/songs-explorer/songs-explorer.module';
import { RadioController } from './radio.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [RadioTypeOrmModule, RadioGraphqlModule, FilesModule, SongsExplorerModule, UserModule, AuthModule],
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
