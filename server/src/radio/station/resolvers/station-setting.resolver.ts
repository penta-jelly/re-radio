import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../../user/services/user.service';
import { StationSettingDTO } from '../dto/station-setting.dto';
import { StationSettingService } from '../services/station-setting.service';
import { StationService } from '../services/station.service';
import { StationSettingFindInput } from '../station.input';
import { StationSetting } from '../entities/station-setting.entity';

@Resolver((of) => StationSettingDTO)
export class StationSettingResolver {
  constructor(
    private readonly stationService: StationService,
    private readonly stationSettingService: StationSettingService,
    private readonly userService: UserService,
  ) {}

  @Query((returns) => StationSettingDTO)
  async stationSetting(
    @Args({ name: 'where', type: () => StationSettingFindInput })
    where: StationSettingFindInput,
  ): Promise<StationSettingDTO> {
    let userSetting: StationSetting | undefined;
    let id = `${where.stationId}`;
    if (where.userId) {
      id = `${where.stationId}-${where.userId}`;
      userSetting = await this.stationSettingService.findOne(where.stationId, where.userId);
    }
    const stationSetting = await this.stationSettingService.findStationSettingByOnlineUsers(where.stationId);
    return { id, station: stationSetting, user: userSetting };
  }
}
