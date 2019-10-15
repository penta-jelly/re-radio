import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'core/config/config.module';
import { TypeormOptions } from 'core/typeorm/typeorm.options';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeormOptions,
    }),
  ],
})
export class RadioTypeOrmModule {}
