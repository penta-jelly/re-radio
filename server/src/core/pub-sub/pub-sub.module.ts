import { Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [PubSub],
  exports: [PubSub],
})
export class PubSubModule {}
