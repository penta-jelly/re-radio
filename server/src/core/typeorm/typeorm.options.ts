import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from 'core/config/config.service';
import { EnvVariables } from 'core/config/config.variables';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Injectable()
export class TypeormOptions implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): PostgresConnectionOptions {
    return { ...TypeormOptions.createTypeOrmOptions() };
  }

  static createTypeOrmOptions(): PostgresConnectionOptions {
    return {
      type: 'postgres',
      host: ConfigService.get(EnvVariables.DB_HOST),
      port: Number(ConfigService.get(EnvVariables.DB_PORT)),
      username: ConfigService.get(EnvVariables.DB_USER),
      password: ConfigService.get(EnvVariables.DB_PASSWORD),
      database: ConfigService.get(EnvVariables.DB_NAME),
      entities: [process.cwd() + '/src/**/*.entity.ts'],
      migrations: [process.cwd() + '/migrations/*.ts'],
      cli: {
        migrationsDir: 'migrations',
      },
      migrationsRun: true,
    };
  }
}
