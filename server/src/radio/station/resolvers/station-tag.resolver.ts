import { ResolveProperty, Resolver, Root } from '@nestjs/graphql';
import { UserRoleService } from 'radio/user/services/user-role.service';
import { UserService } from 'radio/user/services/user.service';
import { StationTagDTO } from '../dto/station-tag.dto';
import { StationDTO } from '../dto/station.dto';
import { StationTagService } from '../services/station-tag.service';
import { StationService } from '../services/station.service';

@Resolver(of => StationTagDTO)
export class StationTagResolver {
  constructor(
    private readonly stationService: StationService,
    private readonly stationTagService: StationTagService,
    private readonly userService: UserService,
    private readonly userRoleService: UserRoleService,
  ) {}

  @ResolveProperty(returns => [StationDTO])
  async stations(@Root() stationTag: StationTagDTO) {
    const { stations } = await this.stationTagService.findOneOrFail({
      where: { id: stationTag.id },
      relations: ['stations'],
    });
    return stations;
  }
}
