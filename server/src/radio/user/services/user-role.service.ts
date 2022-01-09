import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { UserRole, UserRoleEnum } from '../entities/user-role.entity';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
  ) {}

  find(options?: FindManyOptions<UserRole>): Promise<UserRole[]> {
    return this.userRoleRepository.find(options);
  }

  findOneOrFail(options?: FindOneOptions<UserRole>): Promise<UserRole> {
    return this.userRoleRepository.findOneOrFail(options);
  }

  remove(entities: UserRole[]): Promise<UserRole[]> {
    return this.userRoleRepository.remove(entities);
  }

  create(payload: Pick<UserRole, 'role' | 'user' | 'station'>): Promise<UserRole> {
    if ([UserRoleEnum.STATION_OWNER, UserRoleEnum.STATION_ADMIN].includes(payload.role) && !payload.station) {
      throw new BadRequestException(`Can not create user role, reason: a station must be specify.`);
    }

    return this.userRoleRepository.save(this.userRoleRepository.create(payload));
  }
}
