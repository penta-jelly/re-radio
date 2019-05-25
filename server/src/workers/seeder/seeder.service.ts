import { Injectable, Logger } from '@nestjs/common';
import * as Bcrypt from 'bcrypt-nodejs';
import {
  SongCreateInput,
  StationCreateInput,
  UserCreateInput,
  UserRoleCreateManyWithoutStationInput,
  UserRoleEnum,
} from 'prisma/prisma.binding';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SeederService {
  private logger = new Logger(SeederService.name);
  constructor(private readonly prisma: PrismaService) {}

  async seed() {
    this.logger.log('Start seeder service');
    await this.seedUsers();
    await this.seedStations();
    await this.seedStationSongs();
    this.logger.log('Finish seeder service');
  }

  public async seedUsers() {
    this.logger.log('Start seeding users');
    await Promise.all(this.getUserFixtures().map(dto => this.prisma.mutation.createUser({ data: dto })));
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
      this.getStationFixtures().map(dto =>
        this.prisma.mutation.createStation({
          data: {
            ...dto,
            tags: { ...dto.tags, connect: { id: qaTag.id } },
          },
        }),
      ),
    );
  }

  private getStationFixtures(): StationCreateInput[] {
    const createRoleFor = (username: string): UserRoleCreateManyWithoutStationInput => ({
      create: { role: 'STATION_OWNER', user: { connect: { username } } },
    });
    return [
      { name: 'Station A', slug: 'station-a', userRoles: createRoleFor('admin'), tags: { create: { name: 'a-team' } } },
      { name: 'Station B', slug: 'station-b', userRoles: createRoleFor('admin'), tags: { create: { name: 'b-team' } } },
      { name: 'Station C', slug: 'station-c', userRoles: createRoleFor('admin'), tags: { create: { name: 'c-team' } } },
      { name: 'Station D', slug: 'station-d', userRoles: createRoleFor('admin'), tags: { create: { name: 'd-team' } } },
      {
        name: 'Station E',
        slug: 'station-e',
        userRoles: createRoleFor('pvtri96'),
        tags: { create: { name: 'e-team' } },
      },
      {
        name: 'Station F',
        slug: 'station-f',
        userRoles: createRoleFor('dungle1811'),
        tags: { create: { name: 'f-team' } },
      },
      {
        name: 'Station G',
        slug: 'station-g',
        userRoles: createRoleFor('lednhatkhanh'),
        tags: { create: { name: 'g-team' } },
      },
      {
        name: 'Station H',
        slug: 'station-h',
        userRoles: createRoleFor('lybaokhanh'),
        tags: { create: { name: 'h-team' } },
      },
      {
        name: 'Station I',
        slug: 'station-i',
        userRoles: createRoleFor('thanhvinhlu'),
        tags: { create: { name: 'i-team' } },
      },
      {
        name: 'Normie station',
        slug: 'normie-station',
        userRoles: createRoleFor('admin'),
        tags: { create: { name: 'i-team' } },
      },
      ...Array(5)
        .fill(null)
        .map<StationCreateInput>((_, index) => ({
          name: `Station ${index}`,
          slug: `station-${index}`,
          userRoles: createRoleFor('admin'),
          tags: { create: { name: `the-${index}-team` } },
        })),
    ];
  }

  public async seedStationSongs() {
    await Promise.all(this.getSongFixtures().map(song => this.prisma.mutation.createSong({ data: song })));
  }

  private getSongFixtures(): SongCreateInput[] {
    const base = this.getStationFixtures().reduce<SongCreateInput[]>(
      (prev, station) => [
        ...prev,
        {
          title: 'Westlife - My Love (Official Music Video)',
          url: 'https://www.youtube.com/watch?v=ulOb9gIGGd0',
          creator: { connect: { username: 'admin' } },
          duration: 240000,
          thumbnail: 'https://i.ytimg.com/vi/ulOb9gIGGd0/hqdefault.jpg',
          station: { connect: { slug: station.slug } },
          status: 'PENDING',
        },
        {
          title: 'TWICE "Heart Shaker" M/V',
          url: 'https://www.youtube.com/watch?v=rRzxEiBLQCA',
          creator: { connect: { username: 'admin' } },
          duration: 195000,
          thumbnail: 'https://i.ytimg.com/vi/rRzxEiBLQCA/hqdefault.jpg',
          station: { connect: { slug: station.slug } },
          status: 'PENDING',
        },
        {
          title: 'Zedd - I Want You To Know (Official Music Video) ft. Selena Gomez',
          url: 'https://www.youtube.com/watch?v=X46t8ZFqUB4',
          creator: { connect: { username: 'admin' } },
          duration: 225000,
          thumbnail: 'https://i.ytimg.com/vi/X46t8ZFqUB4/hqdefault.jpg',
          station: { connect: { slug: station.slug } },
          status: 'PENDING',
        },
      ],
      [],
    );

    return [
      ...base,
      {
        title: 'JUSTATEE x PHUONG LY - CRAZY MAN | OFFICIAL MV',
        url: 'https://www.youtube.com/watch?v=HXkh7EOqcQ4',
        creator: { connect: { username: 'normie' } },
        duration: 240000,
        thumbnail: 'https://i.ytimg.com/vi/ulOb9gIGGd0/hqdefault.jpg',
        station: { connect: { slug: 'station-a' } },
        status: 'PENDING',
      },
    ];
  }
}
