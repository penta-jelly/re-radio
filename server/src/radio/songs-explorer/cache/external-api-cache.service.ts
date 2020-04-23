import { inspect } from 'util';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindConditions } from 'typeorm';
import { ExternalApiCache } from './entities/external-api-cache.entity';

@Injectable()
export class ExternalApiCacheService {
  private logger = new Logger(ExternalApiCacheService.name);
  constructor(
    @InjectRepository(ExternalApiCache)
    private readonly repository: Repository<ExternalApiCache>,
  ) {}

  async findAll(where: FindConditions<{ url: string }>[]): Promise<ExternalApiCache[]> {
    return this.repository.find({ where });
  }

  async findOne(url: string): Promise<ExternalApiCache | undefined> {
    return this.repository.findOne({ where: { url } });
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
