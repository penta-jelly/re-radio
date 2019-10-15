import { Module } from '@nestjs/common';
import { RadioTypeOrmModule } from 'core/typeorm/typeorm.module';
import { SeederModule } from './seeder/seeder.module';

@Module({
  imports: [RadioTypeOrmModule, SeederModule],
})
export class WorkersModule {}
