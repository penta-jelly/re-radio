import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { PaginationInput } from '../../../core/graphql/input/pagination';
import { StationService } from '../../station/services/station.service';
import { User } from '../../user/entities/user.entity';
import { Song, SongStatusEnum } from '../entities/song.entity';
import { SongCreateInput } from '../song.input';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private readonly songRepository: Repository<Song>,
    @Inject(forwardRef(() => StationService))
    private readonly stationService: StationService,
  ) {}

  async find(options?: FindManyOptions<Song>): Promise<Song[]> {
    return this.songRepository.find(options);
  }

  async count(options?: FindManyOptions<Song>): Promise<number> {
    return this.songRepository.count(options);
  }

  async findAndCount(options?: FindManyOptions<Song>): Promise<[Song[], number]> {
    return this.songRepository.findAndCount(options);
  }

  async findOne(options?: FindOneOptions<Song>): Promise<Song | undefined> {
    return this.songRepository.findOne(options);
  }

  async findOneOrFail(options: FindOneOptions<Song>): Promise<Song> {
    return this.songRepository.findOneOrFail(options);
  }

  private findHistorySongsQueryBuilder(stationSlug: string) {
    return this.songRepository
      .createQueryBuilder()
      .select(`title, url, thumbnail, duration, "stationSlug"`)
      .addSelect(`max("createdAt")`, `createdAt`)
      .addSelect(`count(id)`, `playedTimes`)
      .addSelect(`array_remove(array_agg(DISTINCT "creatorId"), NULL)`, `creatorIds`)
      .where(`"stationSlug" = :stationSlug`, { stationSlug })
      .andWhere(`status = 'PLAYED'`)
      .groupBy(`title, url, thumbnail, duration, "stationSlug"`)
      .orderBy(`"createdAt"`, 'DESC');
  }

  async findHistorySongs(
    stationSlug: string,
    { take, skip }: PaginationInput,
  ): Promise<
    {
      title: string;
      url: string;
      thumbnail: string;
      duration: number;
      stationSlug: string;
      creatorIds: number[];
      playedTimes: number;
      createdAt: Date;
    }[]
  > {
    return this.findHistorySongsQueryBuilder(stationSlug).take(take).skip(skip).getRawMany();
  }

  async countHistorySongs(stationSlug: string) {
    return this.findHistorySongsQueryBuilder(stationSlug).getCount();
  }

  async create(payload: SongCreateInput, owner: User): Promise<Song> {
    const { stationSlug, ...rawSong } = payload;
    const station = await this.stationService.findOneOrFail({
      where: stationSlug ? { slug: stationSlug } : { id: owner.currentStationId },
    });
    const song = this.songRepository.create(rawSong);
    song.status = song.status || SongStatusEnum.PENDING;
    song.station = station;
    song.creator = owner;
    await this.songRepository.save(song);
    return song;
  }

  async update(criteria: FindConditions<Song>, payload: Partial<Song>): Promise<Song> {
    const song = await this.findOneOrFail({ where: criteria });
    await this.songRepository.save({ ...song, ...payload });
    return await this.findOneOrFail({ where: criteria });
  }

  async delete(criteria: FindConditions<Song>): Promise<void> {
    const song = await this.songRepository.findOneOrFail({ where: criteria });
    await this.songRepository.remove(song);
  }
}
