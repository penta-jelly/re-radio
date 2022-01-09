import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { ConfigService } from '../config/config.service';
import { EnvVariables } from '../config/config.variables';

@Injectable()
export class TypeormOptions implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): PostgresConnectionOptions {
    return {
      ...TypeormOptions.createTypeOrmOptions(),
    };
  }

  static createTypeOrmOptions(): PostgresConnectionOptions {
    return {
      type: 'postgres',
      host: ConfigService.get(EnvVariables.DB_HOST),
      port: Number(ConfigService.get(EnvVariables.DB_PORT)),
      username: ConfigService.get(EnvVariables.DB_USER),
      password: ConfigService.get(EnvVariables.DB_PASSWORD),
      database: ConfigService.get(EnvVariables.DB_NAME),
      entities: [__dirname + '../../../**/*.entity.{ts,js}'],
      migrations: [__dirname + '../../../migrations/*.{ts,js}'],
      cli: {
        migrationsDir: 'src/migrations',
      },
      migrationsRun: true,
    };
  }
}
