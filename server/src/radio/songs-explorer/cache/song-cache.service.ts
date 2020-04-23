import { inspect } from 'util';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindConditions } from 'typeorm';
import { YOUTUBE_SERVICE_KEY } from '../youtube/shared';
import { SongCache } from './entities/song-cache.entity';

@Injectable()
export class SongCacheService {
  private logger = new Logger(SongCacheService.name);
  constructor(
    @InjectRepository(SongCache)
    private readonly repository: Repository<SongCache>,
  ) {}

  async findAll(
    where: FindConditions<{ songId: string; songService: typeof YOUTUBE_SERVICE_KEY; queryParts: string }>[],
  ): Promise<SongCache[]> {
    return this.repository.find({ where });
  }

  async findOne(
    songId: string,
    songService: typeof YOUTUBE_SERVICE_KEY,
    queryParts: string,
  ): Promise<SongCache | undefined> {
    return this.repository.findOne({ where: { songId, songService, queryParts } });
  }

  async persist(
    songId: string,
    songService: typeof YOUTUBE_SERVICE_KEY,
    data: object,
    queryParts: string,
  ): Promise<SongCache> {
    const existingCache = await this.repository.find({ where: { songId, songService, queryParts } });
    if (existingCache) {
      await this.repository.remove(existingCache);
    }
    const cache = this.repository.create({ songId, songService, data, queryParts });
    const inspectedData = inspect(data, { depth: 0 });
    this.logger.log(
      `Song "${songId}" of service "${songService}" has been persisted to internal cache. Data: ${inspectedData}`,
    );
    return this.repository.save(cache);
  }
}
