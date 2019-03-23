import { Module } from '@nestjs/common';
import { SeederModule } from './workers/seeder/Seeder.module';

@Module({
  imports: [SeederModule],
})
export class WorkersModule {}
