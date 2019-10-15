import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { UserRole } from '../entities/user-role.entity';

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
}
