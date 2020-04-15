import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { PubSub } from './pub-sub.service';

@Module({
  imports: [ConfigModule],
  providers: [PubSub],
  exports: [PubSub],
})
export class PubSubModule {}
