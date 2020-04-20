import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Bcrypt from 'bcrypt-nodejs';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { StationService } from '../../station/services/station.service';
import { UserRole } from '../entities/user-role.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
    @Inject(forwardRef(() => StationService))
    private readonly stationService: StationService,
  ) {}

  async find(options?: FindManyOptions<User>): Promise<User[]> {
    return this.userRepository.find(options);
  }

  async count(options?: FindManyOptions<User>): Promise<number> {
    return this.userRepository.count(options);
  }

  async findAndCount(options?: FindManyOptions<User>): Promise<[User[], number]> {
    return this.userRepository.findAndCount(options);
  }

  async findOneOrFail(options: FindOneOptions<User>): Promise<User> {
    return this.userRepository.findOneOrFail(options);
  }

  async create(payload: Partial<User>): Promise<User> {
    const entity = this.userRepository.create(payload);
    entity.password = this.generateEncryptedPassword(entity.password);
    return this.userRepository.save(entity);
  }

  async update(criteria: FindConditions<User>, payload: Partial<User>): Promise<void> {
    const user = await this.findOneOrFail({ where: criteria });
    await this.userRepository.save({ ...user, ...payload });
  }

  async delete(criteria: FindConditions<User>): Promise<void> {
    const user = await this.findOneOrFail({ where: criteria, relations: ['roles'] });
    await Promise.all(
      user.roles.map(async (role) => {
        role = await this.userRoleRepository.findOneOrFail({ where: { id: role.id }, relations: ['station'] });
        if (role.station) {
          await this.stationService.delete({ id: role.station.id });
        }
        await this.userRoleRepository.remove(role);
      }),
    );
    await this.userRepository.remove(user);
  }

  generateEncryptedPassword(rawPassword: string) {
    return Bcrypt.hashSync(rawPassword, Bcrypt.genSaltSync(8));
  }

  isValidPassword(passwordA: string, passwordB: string): boolean {
    return Bcrypt.compareSync(passwordA, passwordB);
  }
}
