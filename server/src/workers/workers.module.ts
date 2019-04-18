import { Module } from '@nestjs/common';
import { SeederModule } from './seeder/seeder.module';

@Module({
  imports: [SeederModule],
})
export class WorkersModule {}
