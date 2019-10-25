import { Injectable } from '@nestjs/common';
import { ConfigService } from 'core/config/config.service';
import { EnvVariables } from 'core/config/config.variables';
import { RedisPubSub } from 'graphql-redis-subscriptions';

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

  subscribe(trigger: string, onMessage: Function, options?: object): Promise<number> {
    return this.instance.subscribe(trigger, onMessage, options);
  }

  unsubscribe(subId: number): void {
    return this.instance.unsubscribe(subId);
  }

  asyncIterable<T>(triggers: string | string[], options?: object): AsyncIterable<T> {
    return {
      [Symbol.asyncIterator]: () => this.instance.asyncIterator<T>(triggers, options),
    };
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
