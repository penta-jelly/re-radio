import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from 'radio/users/user.service';
import { UserCreateDTO } from 'radio/users/dto/UserCreateInput.dto';

@Injectable()
export class SeederService {
  private logger = new Logger(SeederService.name);
  constructor(private readonly prisma: PrismaService, private readonly usersService: UsersService) {}

  async seed() {
    this.logger.log('Start seeder service');
    await this.seedUsers();
  }

  public async seedUsers() {
    this.logger.log('Start seeding ADMIN users');
    await Promise.all(this.getUserFixtures().map(dto => this.usersService.createUser({ data: dto })));
    await Promise.all(
      this.getUserFixtures().map(dto =>
        this.prisma.mutation.createUserRole({ data: { role: 'ADMIN', user: { connect: { email: dto.email } } } }),
      ),
    );
    this.logger.log('Finish seeding ADMIN users');
  }

  private getUserFixtures(): UserCreateDTO[] {
    const password = '123456';
    return [
      { email: 'admin@reradio.com', password },
      { email: 'pvtri96@gmail.com', password },
      { email: 'dungle1811@gmail.com', password },
      { email: 'lednhatkhanh@gmail.com', password },
      { email: 'lybaokhanh@gmail.com', password },
      { email: 'thanhvinhlu@gmail.com', password },
    ];
  }
}
