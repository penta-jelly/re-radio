import { Module } from '@nestjs/common';
import { LoggerModule } from '../core/logger/logger.module';
import { RadioTypeOrmModule } from '../core/typeorm/typeorm.module';
import { SeederModule } from './seeder/seeder.module';

@Module({
  imports: [
    LoggerModule,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    RadioTypeOrmModule.forRoot(WorkersModule.name),
    SeederModule,
  ],
})
export class WorkersModule {}
