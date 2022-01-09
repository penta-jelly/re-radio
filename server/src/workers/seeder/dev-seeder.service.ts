import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Bcrypt from 'bcrypt-nodejs';
import { DeepPartial, Repository } from 'typeorm';
import { Song, SongStatusEnum } from '../../radio/song/entities/song.entity';
import { StationTag } from '../../radio/station/entities/station-tag.entity';
import { Station } from '../../radio/station/entities/station.entity';
import { UserRole, UserRoleEnum } from '../../radio/user/entities/user-role.entity';
import { User } from '../../radio/user/entities/user.entity';

@Injectable()
export class DevSeederService {
  private logger = new Logger(DevSeederService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
    @InjectRepository(Station)
    private readonly stationRepository: Repository<Station>,
    @InjectRepository(StationTag)
    private readonly stationTagRepository: Repository<StationTag>,
    @InjectRepository(Song)
    private readonly songRepository: Repository<Song>,
  ) {}

  public async seed() {
    this.logger.log('Start seeder service');
    await this.seedUsers();
    await this.seedUserRoles();
    await this.seedStations();
    await this.seedSongs();
    this.logger.log('Finish seeder service');
  }

  public async reset() {
    this.logger.log('Start resetting seeder service');
    await this.resetSongs();
    await this.resetStations();
    await this.resetUserRoles();
    await this.resetUsers();
    this.logger.log('Finish resetting seeder service');
  }

  public async shouldSeed(): Promise<boolean> {
    this.logger.log('Check whether the database has already been seeded before.');
    const rawUsers = this.getUserFixtures();
    const existedUser = await Promise.all(
      rawUsers.map(({ username, email }) => this.userRepository.findOne({ where: { username, email } })),
    );
    const result = existedUser.every((user) => !user);
    if (result) {
      this.logger.log('The database is empty, ready to seed.');
    } else {
      this.logger.log('The database has already been seeded before.');
    }
    return result;
  }

  private async seedUsers() {
    this.logger.log('Seeding users');
    await Promise.all(this.getUserFixtures().map((user) => this.userRepository.save(user)));
  }

  private async resetUsers() {
    this.logger.log('Resetting users');
    await Promise.all(
      this.getUserFixtures().map(async (data) => {
        const user = await this.userRepository.findOne({ where: { email: data.email } });
        return user && (await this.userRepository.remove(user));
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

  private async seedUserRoles() {
    this.logger.log('Seeding user roles');
    await Promise.all((await this.getUserRoleFixtures()).map((role) => this.userRoleRepository.save(role)));
  }

  private async resetUserRoles() {
    this.logger.log('Resetting user roles');
    const toBeRemovedTags: string[] = [];
    const fixtures = await this.getUserRoleFixtures();
    await Promise.all(
      fixtures.map(async (data) => {
        const userRole = await this.userRoleRepository.findOne({
          where: { user: { id: data.user.id }, role: data.role },
        });
        userRole && (await this.userRoleRepository.remove(userRole));
        const ownerRoles = await this.userRoleRepository.find({
          where: { user: { id: data.user.id }, role: UserRoleEnum.STATION_OWNER },
          relations: ['station'],
        });
        const ownedStations = ownerRoles
          .map(({ station }) => station)
          .filter((station): station is Station => !!station);

        for (const station of ownedStations) {
          const { tags } = await this.stationRepository.findOneOrFail({
            where: { id: station.id },
            relations: ['tags'],
          });
          toBeRemovedTags.push(...tags.map((tag) => tag.name));
        }
        await this.userRoleRepository.remove(ownerRoles);
        await this.stationRepository.remove(ownedStations);
      }),
    );
    await Promise.all(
      toBeRemovedTags
        .filter((tagName, index) => toBeRemovedTags.indexOf(tagName) === index)
        .map((tagName) => this.stationTagRepository.delete({ name: tagName })),
    );
  }

  private async getUserRoleFixtures(): Promise<UserRole[]> {
    const result: UserRole[] = [];
    const adminUsers = ['pvtri96', 'admin', 'dungle1811', 'lednhatkhanh', 'lybaokhanh', 'thanhvinhlu'];
    await Promise.all(
      adminUsers.map(async (username) => {
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

  private async seedStations() {
    this.logger.log('Seeding stations');
    const defaultTags = await this.stationTagRepository.save([
      this.stationTagRepository.create({ name: 'Test' }),
      this.stationTagRepository.create({ name: 'QA' }),
    ]);
    await Promise.all(
      this.getStationFixtures().map(async (data) => {
        const { name, slug } = data;
        let station = this.stationRepository.create({ name, slug, tags: defaultTags });
        station = await this.stationRepository.save(station);
        if (!data.owner) {
          data.owner = { username: 'admin' };
        }
        const owner = await this.userRepository.findOne({ where: { username: data.owner.username } });
        if (owner) {
          const ownerRole = this.userRoleRepository.create({ role: UserRoleEnum.STATION_OWNER, station, user: owner });
          await this.userRoleRepository.save(ownerRole);
        }
      }),
    );
  }

  private async resetStations() {
    this.logger.log('Resetting stations');
    await Promise.all(
      this.getStationFixtures().map(async (data) => {
        const { name, slug } = data;
        const station = await this.stationRepository.findOne({ where: { name, slug }, relations: ['songs'] });
        if (!station) return;

        await Promise.all(station.songs.map((song) => this.songRepository.remove(song)));

        if (!data.owner) {
          data.owner = { username: 'admin' };
        }
        const owner = await this.userRepository.findOne({ where: { username: data.owner.username } });
        if (owner) {
          await this.userRoleRepository.delete({ role: UserRoleEnum.STATION_OWNER, station, user: owner });
          await this.stationRepository.remove(station);
        }
      }),
    );
    await this.stationTagRepository.delete({ name: 'Test' });
    await this.stationTagRepository.delete({ name: 'QA' });
  }

  private getStationFixtures(): DeepPartial<Station & { owner: User }>[] {
    return [
      { name: 'Station A', slug: 'station-a' },
      { name: 'Station B', slug: 'station-b', owner: { username: 'pvtri96' } },
      { name: 'Station C', slug: 'station-c', owner: { username: 'dungle1811' } },
      { name: 'Station D', slug: 'station-d', owner: { username: 'lednhatkhanh' } },
      { name: 'Station E', slug: 'station-e', owner: { username: 'lybaokhanh' } },
      { name: 'Station F', slug: 'station-f', owner: { username: 'thanhvinhlu' } },
      { name: 'Station G', slug: 'station-g' },
      { name: 'Station H', slug: 'station-h' },
      { name: 'Station I', slug: 'station-i' },
      { name: 'Normie station', slug: 'normie-station', owner: { username: 'normie' } },
      ...Array(5)
        .fill(null)
        .map<Partial<Station>>((_, index) => ({ name: `Station ${index}`, slug: `station-${index}` })),
    ];
  }

  public async seedSongs() {
    this.logger.log('Seeding songs');
    await Promise.all(
      this.getSongFixtures().map(async (data) => {
        if (!data.creator) data.creator = { username: 'admin' };
        if (!data.station) data.station = { slug: 'station-a' };
        if (!data.status) data.status = SongStatusEnum.PENDING;
        if (!data.upVoteUserIds) data.upVoteUserIds = [];
        if (!data.downVoteUserIds) data.downVoteUserIds = [];
        const creator = await this.userRepository.findOne({ where: { username: data.creator.username } });
        const station = await this.stationRepository.findOne({ where: { slug: data.station.slug } });
        if (creator && station) {
          const song = this.songRepository.create(data);
          song.creator = creator;
          song.station = station;
          await this.songRepository.save(song);
        }
      }),
    );
  }

  private async resetSongs() {
    this.logger.log('Resetting songs');
    await Promise.all(
      this.getSongFixtures().map(async (data) => {
        if (!data.creator) data.creator = { username: 'admin' };
        if (!data.station) data.station = { slug: 'station-a' };
        const creator = await this.userRepository.findOne({ where: { username: data.creator.username } });
        const station = await this.stationRepository.findOne({ where: { slug: data.station.slug } });
        if (creator && station) {
          const { title, url, thumbnail } = data;
          const songs = await this.songRepository.find({
            where: { creator: { id: creator.id }, station: { id: station.id }, title, url, thumbnail },
          });
          songs.length > 0 && (await this.songRepository.remove(songs));
        }
      }),
    );
  }

  private getSongFixtures(): DeepPartial<Song & { creator: User; station: Station }>[] {
    return this.getStationFixtures().reduce<DeepPartial<Song & { creator: User; station: Station }>[]>(
      (songs, station) => {
        const songsByStation = [
          {
            title: 'Westlife - My Love (Official Music Video)',
            url: 'https://www.youtube.com/watch?v=ulOb9gIGGd0',
            duration: 20000 + Math.round(Math.random() * 180000),
            thumbnail: 'https://i.ytimg.com/vi/ulOb9gIGGd0/hqdefault.jpg',
            station: { slug: station.slug },
          },
          {
            title: 'TWICE "Heart Shaker" M/V',
            url: 'https://www.youtube.com/watch?v=rRzxEiBLQCA',
            duration: 20000 + Math.round(Math.random() * 180000),
            thumbnail: 'https://i.ytimg.com/vi/rRzxEiBLQCA/hqdefault.jpg',
            station: { slug: station.slug },
          },
          {
            title: 'Zedd - I Want You To Know (Official Music Video) ft. Selena Gomez',
            url: 'https://www.youtube.com/watch?v=X46t8ZFqUB4',
            duration: 20000 + Math.round(Math.random() * 180000),
            thumbnail: 'https://i.ytimg.com/vi/X46t8ZFqUB4/hqdefault.jpg',
            station: { slug: station.slug },
          },
        ];
        return [...songs, ...songsByStation];
      },
      [],
    );
  }
}
