import { User } from 'radio/user/entities/user.entity';
import { Station } from 'radio/station/entities/station.entity';

export namespace RealTimeStationEvent {
  export const USER_JOINED = 'USER_JOINED';
  export interface UserJoinedPayload {
    user: User;
    station: Station;
  }

  export const USER_LEFT = 'USER_LEFT';
  export interface UserLeftPayload {
    user: User;
    station: Station;
  }
}
