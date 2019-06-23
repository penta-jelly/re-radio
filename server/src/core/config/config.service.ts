import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { EnvVariables } from './config.variables';

@Injectable()
export class ConfigService {
  constructor() {
    dotenv.config();
  }

  get(key: EnvVariables): string {
    const value = process.env[EnvVariables[key]];
    if (value === undefined) {
      throw new InternalServerErrorException(`Can not get environment variable ${key}`);
    }
    return value;
  }

  getOrNull(key: EnvVariables): string | null {
    try {
      return this.get(key);
    } catch (error) {
      return null;
    }
  }

  static get(key: EnvVariables): string {
    dotenv.config();
    const value = process.env[EnvVariables[key]];
    if (value === undefined) {
      throw new InternalServerErrorException(`Can not get environment variable ${key}`);
    }
    return value;
  }

  isDevelopment(): boolean {
    return this.get(EnvVariables.NODE_ENV) === 'development';
  }

  isProduction(): boolean {
    return this.get(EnvVariables.NODE_ENV) === 'production';
  }

  isStaging(): boolean {
    return this.get(EnvVariables.NODE_ENV) === 'staging';
  }
}
