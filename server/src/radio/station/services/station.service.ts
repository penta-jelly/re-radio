import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { UserRoleEnum } from '../../user/entities/user-role.entity';
import { User } from '../../user/entities/user.entity';
import { UserRoleService } from '../../user/services/user-role.service';
import { UserService } from '../../user/services/user.service';
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
    @Inject(forwardRef(() => UserRoleService))
    private readonly userRoleService: UserRoleService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
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

  async findOne(options?: FindOneOptions<Station>): Promise<Station | undefined> {
    return this.stationRepository.findOne(options);
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
    const station = await this.findOneOrFail({ where: criteria });
    await this.stationRepository.save({ ...station, ...payload });
  }

  async delete(criteria: FindConditions<Station>): Promise<void> {
    const station = await this.stationRepository.findOneOrFail({ where: criteria, relations: ['userRoles'] });
    await this.userRoleService.remove(station.userRoles);
    await this.stationRepository.remove(station);
  }

  async findStationsByOnlineUser(user: User): Promise<Station[]> {
    return this.stationRepository
      .createQueryBuilder()
      .select('*')
      .where(`:userId = ANY("onlineUserIds")`, { userId: user.id })
      .getRawMany();
  }

  async cleanStationOnlineUsers() {
    return this.stationRepository.update({}, { onlineUserIds: [] });
  }

  async addOnlineUser(station: Station, user: User): Promise<boolean> {
    const userIndex = station.onlineUserIds.findIndex((id) => id === user.id);
    if (userIndex === -1) {
      station.onlineUserIds.push(user.id);
      await Promise.all([
        this.stationRepository.save(station),
        this.userService.update({ id: user.id }, { currentStationId: station.id }),
      ]);
      return true;
    }
    return false;
  }

  async removeOnlineUser(station: Station, user: User): Promise<boolean> {
    const userIndex = station.onlineUserIds.findIndex((id) => id === user.id);
    if (userIndex !== -1) {
      station.onlineUserIds.splice(userIndex, 1);
      await Promise.all([
        this.stationRepository.save(station),
        this.userService.update({ id: user.id }, { currentStationId: null }),
      ]);
      return true;
    }
    return false;
  }
}
