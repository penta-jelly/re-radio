import { inspect } from 'util';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Moment from 'moment';
import { ExternalApiCache } from './entities/external-api-cache.entity';

@Injectable()
export class ExternalApiCacheService {
  private logger = new Logger(ExternalApiCacheService.name);
  constructor(
    @InjectRepository(ExternalApiCache)
    private readonly repository: Repository<ExternalApiCache>,
  ) {}

  async find(url: string): Promise<ExternalApiCache | undefined> {
    const cache = await this.repository.findOne({ where: { url } });
    if (!cache) {
      return undefined;
    }
    console.log(process.env.TZ);
    const updatedAt = Moment(cache.updatedAt.getTime());
    const now = Moment(new Date().getTime());
    const duration = Moment.duration(now.diff(updatedAt));
    const days = duration.asDays();
    if (days > 7) {
      this.logger.log(`The cache of url "${url}" is outdated, removing it now.`);
      return undefined;
    }

    return cache;
  }

  async persist(data: object, url: string): Promise<ExternalApiCache> {
    const existingCache = await this.repository.find({ where: { url } });
    if (existingCache) {
      await this.repository.remove(existingCache);
    }
    const cache = this.repository.create({ data, url });
    const inspectedData = inspect(data, { depth: 0 });
    this.logger.log(`Request "${url}" has been persisted to internal cache. Data: ${inspectedData}`);
    return this.repository.save(cache);
  }
}
