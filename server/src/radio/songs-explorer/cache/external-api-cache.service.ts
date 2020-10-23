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

  /**
   *
   * @param url cached url
   * @param timeout in days
   */
  async find(url: string, timeout: number = 7): Promise<ExternalApiCache | undefined> {
    const cache = await this.repository.findOne({ where: { url } });
    if (!cache) {
      return undefined;
    }
    const updatedAt = Moment(cache.updatedAt.getTime());
    const now = Moment(new Date().getTime());
    const duration = Moment.duration(now.diff(updatedAt));
    const days = duration.asDays();
    if (days > timeout) {
      this.logger.log(`The cache of url "${url}" is outdated, removing it now.`);
      return undefined;
    }

    return cache;
  }

  async persist(data: Record<string, unknown>, url: string): Promise<ExternalApiCache> {
    const existingCache = await this.repository.find({ where: { url } });
    if (existingCache) {
      await this.repository.remove(existingCache);
    }
    const cache = this.repository.create({ data, url });
    const inspectedData = inspect(data, { depth: 1 });
    this.logger.log(`Request "${url}" has been persisted to internal cache. Data: ${inspectedData}`);
    return this.repository.save(cache);
  }
}
