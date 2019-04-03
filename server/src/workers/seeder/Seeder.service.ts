import { Injectable, Logger } from '@nestjs/common';
import * as Bcrypt from 'bcrypt-nodejs';
import { StationCreateInput, UserCreateInput, UserRoleEnum } from '../../prisma/prisma.binding';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SeederService {
  private logger = new Logger(SeederService.name);
  constructor(private readonly prisma: PrismaService) {}

  async seed() {
    this.logger.log('Start seeder service');
    await this.seedUsers();
    await this.seedStations();
    this.logger.log('Finish seeder service');
  }

  public async seedUsers() {
    this.logger.log('Start seeding users');
    await Promise.all(
      this.getUserFixtures().map(async dto => {
        if (await this.prisma.exists.User({ email: dto.email })) {
          await this.prisma.mutation.deleteUser({ where: { email: dto.email } });
        }
        await this.prisma.mutation.createUser({ data: dto });
      }),
    );
  }

  private getUserFixtures(): UserCreateInput[] {
    const password = Bcrypt.hashSync('123456', Bcrypt.genSaltSync(8));
    const role: UserRoleEnum = 'ADMIN';
    return [
      { email: 'admin@reradio.com', username: 'admin', password, roles: { create: { role } } },
      { email: 'pvtri96@reradio.com', username: 'pvtri96', password, roles: { create: { role } } },
      { email: 'dungle1811@reradio.com', username: 'dungle1811', password, roles: { create: { role } } },
      { email: 'lednhatkhanh@reradio.com', username: 'lednhatkhanh', password, roles: { create: { role } } },
      { email: 'lybaokhanh@reradio.com', username: 'lybaokhanh', password, roles: { create: { role } } },
      { email: 'thanhvinhlu@reradio.com', username: 'thanhvinhlu', password, roles: { create: { role } } },
      { email: 'normie@reradio.com', username: 'normie', password },
    ];
  }

  public async seedStations() {
    this.logger.log('Start seeding stations');
    const qaTag = await this.prisma.mutation.createStationTag({ data: { name: 'qa' } });
    await Promise.all(
      this.getStationFixtures().map(async dto => {
        if (await this.prisma.exists.Station({ slug: dto.slug })) {
          await this.prisma.mutation.deleteStation({ where: { slug: dto.slug } });
        }
        const station = await this.prisma.mutation.createStation({
          data: {
            ...dto,
            tags: { ...dto.tags, connect: { id: qaTag.id } },
          },
        });
        const owner = await this.prisma.query.user({ where: { username: dto.owner.connect.username } });
        await this.prisma.mutation.createUserRole({
          data: {
            role: 'STATION_OWNER',
            station: { connect: { id: station.id } },
            user: { connect: { id: owner.id } },
          },
        });
      }),
    );
  }

  private getStationFixtures(): StationCreateInput[] {
    const owner = { connect: { username: 'admin' } };
    return [
      { name: 'Station A', slug: 'station-a', owner, tags: { create: { name: 'a-team' } } },
      { name: 'Station B', slug: 'station-b', owner, tags: { create: { name: 'b-team' } } },
      { name: 'Station C', slug: 'station-c', owner, tags: { create: { name: 'c-team' } } },
      { name: 'Station D', slug: 'station-D', owner, tags: { create: { name: 'e-team' } } },
      { name: 'Station E', slug: 'station-e', owner, tags: { create: { name: 'e-team' } } },
      { name: 'Station F', slug: 'station-f', owner, tags: { create: { name: 'f-team' } } },
      { name: 'Station G', slug: 'station-g', owner, tags: { create: { name: 'g-team' } } },
      { name: 'Station H', slug: 'station-h', owner, tags: { create: { name: 'h-team' } } },
      { name: 'Station I', slug: 'station-i', owner, tags: { create: { name: 'i-team' } } },
      {
        name: 'Normie station',
        slug: 'normie-station',
        owner: { connect: { username: 'normie' } },
        tags: { create: { name: 'i-team' } },
      },
      ...Array(100)
        .fill(null)
        .map((_v, index) => ({
          name: `Station ${index}`,
          slug: `station-${index}`,
          owner,
          tags: { create: { name: `${index}-team` } },
        })),
    ];
  }
}
