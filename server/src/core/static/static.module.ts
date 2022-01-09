import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { StaticOptions } from './static.options';

@Module({
  imports: [
    ServeStaticModule.forRootAsync({
      imports: [],
      useClass: StaticOptions,
    }),
  ],
})
export class StaticModule {}
