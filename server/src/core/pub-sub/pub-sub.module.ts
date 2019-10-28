import { Module } from '@nestjs/common';
import { ConfigModule } from 'core/config/config.module';
import { PubSub } from 'core/pub-sub/pub-sub.service';

@Module({
  imports: [ConfigModule],
  providers: [PubSub],
  exports: [PubSub],
})
export class PubSubModule {}
