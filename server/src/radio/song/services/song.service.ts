import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from 'radio/song/entities/song.entity';
import { SongCreateInput } from 'radio/song/song.input';
import { StationService } from 'radio/station/services/station.service';
import { User } from 'radio/user/entities/user.entity';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';

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

  async create(payload: SongCreateInput, owner: User): Promise<Song> {
    const { stationSlug, ...rawSong } = payload;
    const song = this.songRepository.create(rawSong);
    song.station = await this.stationService.findOneOrFail({ where: { slug: stationSlug } });
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
