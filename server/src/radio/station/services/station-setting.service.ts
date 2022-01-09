import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StationSetting, StationRunningOutOfSongsBehaviorEnum } from '../entities/station-setting.entity';
import { UserService } from '../../user/services/user.service';
import { StationService } from './station.service';

@Injectable()
export class StationSettingService {
  constructor(
    @InjectRepository(StationSetting)
    private readonly stationSettingRepository: Repository<StationSetting>,
    private readonly stationService: StationService,
    private readonly userService: UserService,
  ) {}

  async create(stationId: number, userId: number, setting: Partial<SettingOption> = {}): Promise<StationSetting> {
    const station = await this.stationService.findOneOrFail({ where: { id: stationId } });
    const user = await this.userService.findOneOrFail({ where: { id: userId } });
    const entity = this.stationSettingRepository.create({ station, user, ...setting });

    return this.stationSettingRepository.save(entity);
  }

  async update(stationId: number, userId: number, setting: SettingOption): Promise<StationSetting> {
    const entity = await this.stationSettingRepository.findOneOrFail({
      where: { station: { id: stationId }, user: { id: userId } },
    });
    return this.stationSettingRepository.save({ ...entity, ...setting });
  }

  async findOne(stationId: number, userId: number): Promise<StationSetting | undefined> {
    return this.stationSettingRepository.findOne({ where: { station: { id: stationId }, user: { id: userId } } });
  }

  async findStationSettingByOnlineUsers(stationId: number): Promise<StationSharedSettingOption> {
    const station = await this.stationService.findOneOrFail({ where: { id: stationId } });
    let settings = await this.stationSettingRepository.find({
      where: station.onlineUserIds.map((userId) => ({ station, user: { id: userId } })),
      relations: ['user'],
    });
    settings = settings.map((setting) => ({ ...setting, station }));
    return {
      outOfSongsBehavior: await this.resolveOutOfSongsBehavior(settings),
    };
  }

  private async resolveOutOfSongsBehavior(settings: StationSetting[]): Promise<StationRunningOutOfSongsBehaviorEnum> {
    const playFirstSongFromRelatedSongsName = StationRunningOutOfSongsBehaviorEnum.PLAY_FIRST_SONG_FROM_RELATED_SONGS;
    const playFirstSongFromRelatedSongs = settings.reduce(
      (count, setting) => (setting.outOfSongsBehavior === playFirstSongFromRelatedSongsName ? count + 1 : count),
      0,
    );
    const playRandomSongFromHistorySongsName = StationRunningOutOfSongsBehaviorEnum.PLAY_RANDOM_SONG_FROM_HISTORY_SONGS;
    const playRandomSongFromHistorySongs = settings.reduce(
      (count, setting) => (setting.outOfSongsBehavior === playRandomSongFromHistorySongsName ? count + 1 : count),
      0,
    );
    return playFirstSongFromRelatedSongs > playRandomSongFromHistorySongs
      ? playFirstSongFromRelatedSongsName
      : playRandomSongFromHistorySongsName;
  }
}

interface SettingOption extends Pick<StationSetting, 'outOfSongsBehavior' | 'notifyOnlineUser'> {}

interface StationSharedSettingOption extends Pick<StationSetting, 'outOfSongsBehavior'> {}
