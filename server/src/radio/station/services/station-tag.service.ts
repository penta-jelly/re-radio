import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { StationTag } from '../entities/station-tag.entity';
import { Station } from '../entities/station.entity';

@Injectable()
export class StationTagService {
  constructor(
    @InjectRepository(StationTag)
    private readonly stationTagRepository: Repository<StationTag>,
    @InjectRepository(Station)
    private readonly stationRepository: Repository<Station>,
  ) {}

  async find(options?: FindManyOptions<StationTag>): Promise<StationTag[]> {
    return this.stationTagRepository.find(options);
  }

  async count(options?: FindManyOptions<StationTag>): Promise<number> {
    return this.stationTagRepository.count(options);
  }

  async findAndCount(options?: FindManyOptions<StationTag>): Promise<[StationTag[], number]> {
    return this.stationTagRepository.findAndCount(options);
  }

  async findOneOrFail(options: FindOneOptions<StationTag>): Promise<StationTag> {
    return this.stationTagRepository.findOneOrFail(options);
  }
}
