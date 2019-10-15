import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as Bcrypt from 'bcrypt-nodejs';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { UserRole } from '../entities/user-role.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
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
    await this.userRepository.update(criteria, payload);
  }

  async delete(criteria: FindConditions<User>): Promise<void> {
    const user = await this.findOneOrFail({ where: criteria, relations: ['roles'] });
    await Promise.all(user.roles.map(role => this.userRoleRepository.remove(role)));
    await this.userRepository.delete(criteria);
  }

  generateEncryptedPassword(rawPassword: string) {
    return Bcrypt.hashSync(rawPassword, Bcrypt.genSaltSync(8));
  }

  isValidPassword(passwordA: string, passwordB: string): boolean {
    return Bcrypt.compareSync(passwordA, passwordB);
  }
}
