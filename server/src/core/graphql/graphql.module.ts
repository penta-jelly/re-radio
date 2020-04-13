import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '../config/config.module';
import { PubSubModule } from '../pub-sub/pub-sub.module';
import { GraphqlOptions } from './graphql.options';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [ConfigModule, PubSubModule],
      useClass: GraphqlOptions,
    }),
  ],
})
export class RadioGraphqlModule {}
