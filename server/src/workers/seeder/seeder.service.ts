import { Injectable, Logger } from '@nestjs/common';
import * as Bcrypt from 'bcrypt-nodejs';
import { StationCreateInput, UserCreateInput, UserRoleEnum, SongCreateInput } from '../../prisma/prisma.binding';
import { PrismaService } from '../../prisma/prisma.service';

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
      this.getStationFixtures().map(async dto => {
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
      { name: 'Station D', slug: 'station-d', owner, tags: { create: { name: 'd-team' } } },
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
      ...Array(0)
        .fill(null)
        .map((_, index) => ({
          name: `Station ${index}`,
          slug: `station-${index}`,
          owner,
          tags: { create: { name: `${index}-team` } },
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
          duration: 195000,
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
        title: 'Westlife - My Love (Official Music Video)',
        url: 'https://www.youtube.com/watch?v=ulOb9gIGGd0',
        creator: { connect: { username: 'normie' } },
        duration: 240000,
        thumbnail: 'https://i.ytimg.com/vi/ulOb9gIGGd0/hqdefault.jpg',
        station: { connect: { slug: 'station-a' } },
        status: 'PENDING',
      },
    ];
  }
}
