import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { EnvVariables } from './config.variables';

@Injectable()
export class ConfigService {
  private static loaded = false;
  private static loadDotEnv() {
    if (!ConfigService.loaded) {
      dotenv.config();
      ConfigService.loaded = true;
    }
  }

  constructor() {
    ConfigService.loadDotEnv();
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
    ConfigService.loadDotEnv();
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
