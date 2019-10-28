import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from 'core/config/config.module';
import { GraphqlOptions } from './graphql.options';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
  ],
})
export class RadioGraphqlModule {}
