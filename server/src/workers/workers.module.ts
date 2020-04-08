import { Module } from '@nestjs/common';
import { RadioTypeOrmModule } from 'core/typeorm/typeorm.module';
import { LoggerModule } from 'core/logger/logger.module';
import { SeederModule } from './seeder/seeder.module';

@Module({
  imports: [LoggerModule, RadioTypeOrmModule, SeederModule],
})
export class WorkersModule {}
