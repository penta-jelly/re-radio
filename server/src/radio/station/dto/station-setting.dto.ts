import { ObjectType, Field } from '@nestjs/graphql';
import { StationRunningOutOfSongsBehaviorEnum } from '../entities/station-setting.entity';

@ObjectType('UserStationSetting')
export class UserStationSettingDTO {
  @Field((type) => StationRunningOutOfSongsBehaviorEnum)
  outOfSongsBehavior: StationRunningOutOfSongsBehaviorEnum;

  @Field((type) => Boolean)
  notifyOnlineUser: boolean;
}

@ObjectType('StationSharedSetting')
export class StationSharedSettingDTO {
  @Field((type) => StationRunningOutOfSongsBehaviorEnum)
  outOfSongsBehavior: StationRunningOutOfSongsBehaviorEnum;
}

@ObjectType('StationSetting')
export class StationSettingDTO {
  @Field()
  id: string;

  @Field((type) => UserStationSettingDTO, { nullable: true })
  user?: UserStationSettingDTO;

  @Field((type) => StationSharedSettingDTO)
  station: StationSharedSettingDTO;
}
