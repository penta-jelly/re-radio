import { Injectable } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { ConfigService } from '../config/config.service';
import { EnvVariables } from '../config/config.variables';

@Injectable()
export class PubSub {
  private readonly instance: RedisPubSub;
  constructor(private readonly configService: ConfigService) {
    this.instance = new RedisPubSub({
      connection: {
        host: this.configService.get(EnvVariables.REDIS_HOST),
        port: this.configService.get(EnvVariables.REDIS_PORT),
      },
      reviver: this.dateReviver.bind(this),
    });
  }

  publish<T>(trigger: string, payload: T): Promise<void> {
    return this.instance.publish<T>(trigger, payload);
  }

  subscribe<T extends (...args: never[]) => Promise<void>>(
    trigger: string,
    onMessage: T,
    options?: Record<string, unknown>,
  ): Promise<number> {
    return this.instance.subscribe(trigger, onMessage, options);
  }

  unsubscribe(subId: number): void {
    return this.instance.unsubscribe(subId);
  }

  asyncIterable<T>(triggers: string | string[], options?: Record<string, unknown>): AsyncIterable<T> {
    return {
      [Symbol.asyncIterator]: () => this.instance.asyncIterator<T>(triggers, options),
    };
  }

  asyncIterator<T>(triggers: string | string[], options?: Record<string, unknown>): AsyncIterator<T> {
    return this.instance.asyncIterator<T>(triggers, options);
  }

  private dateReviver(key, value) {
    const isISO8601Z = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;
    if (typeof value === 'string' && isISO8601Z.test(value)) {
      const tempDateNumber = Date.parse(value);
      if (!isNaN(tempDateNumber)) {
        return new Date(tempDateNumber);
      }
    }
    return value;
  }
}
