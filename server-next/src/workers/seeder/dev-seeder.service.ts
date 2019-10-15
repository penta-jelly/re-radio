import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as Bcrypt from 'bcrypt-nodejs';
import { UserRole, UserRoleEnum } from 'radio/user/entities/user-role.entity';
import { User } from 'radio/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DevSeederService {
  private logger = new Logger(DevSeederService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
  ) {}

  public async seed() {
    this.logger.log('Start seeder service');
    await this.seedUsers();
    await this.seedUserRoles();
    this.logger.log('Finish seeder service');
  }

  public async reset() {
    this.logger.log('Start resetting seeder service');
    await this.resetUserRoles();
    await this.resetUsers();
    this.logger.log('Finish resetting seeder service');
  }

  public async seedUsers() {
    this.logger.log('Seeding users');
    await Promise.all(this.getUserFixtures().map(user => this.userRepository.save(user)));
  }

  public async resetUsers() {
    this.logger.log('Resetting users');
    await Promise.all(
      this.getUserFixtures().map(async data => {
        const user = await this.userRepository.findOne({ where: { email: data.email } });
        return user && this.userRepository.remove(user);
      }),
    );
  }

  private getUserFixtures(): User[] {
    const password = Bcrypt.hashSync('123456', Bcrypt.genSaltSync(8));
    return [
      this.userRepository.create({ email: 'admin@reradio.com', username: 'admin', password }),
      this.userRepository.create({ email: 'pvtri96@reradio.com', username: 'pvtri96', password }),
      this.userRepository.create({ email: 'dungle1811@reradio.com', username: 'dungle1811', password }),
      this.userRepository.create({ email: 'lednhatkhanh@reradio.com', username: 'lednhatkhanh', password }),
      this.userRepository.create({ email: 'lybaokhanh@reradio.com', username: 'lybaokhanh', password }),
      this.userRepository.create({ email: 'thanhvinhlu@reradio.com', username: 'thanhvinhlu', password }),
      this.userRepository.create({ email: 'normie@reradio.com', username: 'normie', password }),
    ];
  }

  public async seedUserRoles() {
    this.logger.log('Seeding user roles');
    await Promise.all((await this.getUserRoleFixtures()).map(role => this.userRoleRepository.save(role)));
  }

  public async resetUserRoles() {
    this.logger.log('Resetting user roles');
    await Promise.all(
      (await this.getUserRoleFixtures()).map(async data => {
        const userRole = await this.userRoleRepository.findOne({
          where: { user: { id: data.user.id }, role: data.role },
        });
        return userRole && this.userRoleRepository.remove(userRole);
      }),
    );
  }

  private async getUserRoleFixtures(): Promise<UserRole[]> {
    const result: UserRole[] = [];
    const adminUsers = ['pvtri96', 'admin', 'dungle1811', 'lednhatkhanh', 'lybaokhanh', 'thanhvinhlu'];
    await Promise.all(
      adminUsers.map(async username => {
        const user = await this.userRepository.findOne({ where: { username } });
        if (user) {
          result.push(
            this.userRoleRepository.create({
              role: UserRoleEnum.ADMIN,
              user: { id: user.id },
            }),
          );
        }
      }),
    );
    return result;
  }
}
