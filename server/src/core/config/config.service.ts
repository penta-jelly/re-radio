import { Injectable, InternalServerErrorException, LogLevel } from '@nestjs/common';
import Dotenv from 'dotenv';
import { EnvVariables } from './config.variables';

@Injectable()
export class ConfigService {
  private static loaded = false;
  private static loadDotEnv() {
    if (!ConfigService.loaded) {
      Dotenv.config();
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

  static getLogLevels(): LogLevel[] {
    const defaultLogLevels: LogLevel[] = ['error', 'warn', 'log', 'debug', 'verbose'];

    const envLogLevel = ConfigService.get(EnvVariables.LOG_LEVEL);
    let logLevel: LogLevel = 'log';
    if (defaultLogLevels.some((level) => envLogLevel === level)) {
      logLevel = envLogLevel as LogLevel;
    }
    switch (logLevel) {
      case 'error':
        return ['error'];
      case 'warn':
        return ['error', 'warn'];
      case 'log':
        return ['error', 'warn', 'log'];
      case 'debug':
        return ['error', 'warn', 'log', 'debug'];
      case 'verbose':
        return ['error', 'warn', 'log', 'debug', 'verbose'];
    }
  }
}
