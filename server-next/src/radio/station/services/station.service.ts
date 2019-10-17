import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRoleEnum } from 'radio/user/entities/user-role.entity';
import { User } from 'radio/user/entities/user.entity';
import { UserRoleService } from 'radio/user/services/user-role.service';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { StationTag } from '../entities/station-tag.entity';
import { Station } from '../entities/station.entity';
import { StationCreateInput } from '../station.input';

@Injectable()
export class StationService {
  constructor(
    @InjectRepository(Station)
    private readonly stationRepository: Repository<Station>,
    @InjectRepository(StationTag)
    private readonly stationTagRepository: Repository<StationTag>,
    private readonly userRoleService: UserRoleService,
  ) {}

  async find(options?: FindManyOptions<Station>): Promise<Station[]> {
    return this.stationRepository.find(options);
  }

  async count(options?: FindManyOptions<Station>): Promise<number> {
    return this.stationRepository.count(options);
  }

  async findAndCount(options?: FindManyOptions<Station>): Promise<[Station[], number]> {
    return this.stationRepository.findAndCount(options);
  }

  async findOneOrFail(options: FindOneOptions<Station>): Promise<Station> {
    return this.stationRepository.findOneOrFail(options);
  }

  async create(payload: StationCreateInput, owner: User): Promise<Station> {
    const { tags, ...data } = payload;
    let station = this.stationRepository.create(data);
    if (tags) {
      station.tags = await Promise.all(
        tags.map(async ({ name }) => {
          const existedStationTag = await this.stationTagRepository.findOne({ where: { name } });
          if (existedStationTag) {
            return existedStationTag;
          }
          return this.stationTagRepository.save(this.stationTagRepository.create({ name }));
        }),
      );
    }
    station = await this.stationRepository.save(station);
    station.userRoles = [await this.userRoleService.create({ user: owner, role: UserRoleEnum.STATION_OWNER, station })];
    return station;
  }

  async update(criteria: FindConditions<Station>, payload: Partial<Station>): Promise<void> {
    await this.stationRepository.update(criteria, payload);
  }

  async delete(criteria: FindConditions<Station>): Promise<void> {
    const { userRoles } = await this.stationRepository.findOneOrFail({ where: criteria, relations: ['userRoles'] });
    await this.userRoleService.remove(userRoles);
    await this.stationRepository.delete(criteria);
  }
}
