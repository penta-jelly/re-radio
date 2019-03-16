import { Module, ValidationPipe } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { GraphqlModule } from 'core/graphql/graphql.module';
import { RequestsInterceptor } from 'core/request.interceptor';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from 'radio/auth/auth.module';
import { UsersModule } from 'radio/users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [GraphqlModule, PrismaModule, UsersModule, AuthModule],
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
