import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { TypeormOptions } from './typeorm.options';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeormOptions,
    }),
  ],
})
export class RadioTypeOrmModule {
  static forRoot(connectionName: string): DynamicModule {
    return {
      module: RadioTypeOrmModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: () => ({
            ...TypeormOptions.createTypeOrmOptions(),
            name: connectionName,
          }),
        }),
      ],
    };
  }
}
