import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { StationService } from 'radio/station/services/station.service';
import { User } from 'radio/user/entities/user.entity';
import { ConfigService } from 'core/config/config.service';
import { EnvVariables } from 'core/config/config.variables';
import { PubSub } from 'core/pub-sub/pub-sub.service';
import { Station } from 'radio/station/entities/station.entity';
import { RealTimeSongService } from '../real-time-songs/real-time-songs.service';
import { RealTimeStationService } from './real-time-stations.service';
import { RealTimeStationEvent } from './real-time-station.event';

@Injectable()
export class RealTimeStationsWorker {
  private readonly logger = new Logger(RealTimeStationsWorker.name);
  constructor(
    private readonly realTimeStationService: RealTimeStationService,
    @Inject(forwardRef(() => RealTimeSongService))
    private readonly realTimeSongService: RealTimeSongService,
    private readonly stationService: StationService,
    private readonly pubSub: PubSub,
    private readonly configService: ConfigService,
  ) {}

  async scanAllStationsOnInitialization() {
    const stations = await this.realTimeStationService.findAllAvailableStations();
    await Promise.all(
      stations.map(async station => {
        if (await this.realTimeStationService.isStationReadyToPlayNextSong(station.slug)) {
          const nextPlayingSong = await this.realTimeSongService.findNextPlayingSongInStation(station.slug);
          nextPlayingSong && (await this.realTimeSongService.updateSongStatusToPlaying(nextPlayingSong.id));
        }
      }),
    );
  }

  private aliveUsersMap: { [key: string]: { timer: NodeJS.Timeout; user: User } | undefined } = {};

  async subscribeOnlineUsersEvent() {
    await this.pubSub.subscribe(RealTimeStationEvent.USER_JOINED, this.onUserJoined.bind(this));
    await this.pubSub.subscribe(RealTimeStationEvent.USER_LEFT, this.onUserLeft.bind(this));
  }

  private async onUserJoined(payload: RealTimeStationEvent.UserJoinedPayload) {
    const { station, user } = payload;

    const aliveUser = this.aliveUsersMap[this.createAliveUserKey(station, user)];
    if (aliveUser) {
      clearTimeout(aliveUser.timer);
      delete this.aliveUsersMap[this.createAliveUserKey(station, user)];
    } else {
      const onlineCount = station.onlineUserIds.length;
      this.logger.log(
        `Station [${station.slug}], user [${user.username}] has join the station (${onlineCount} online now).`,
      );
    }

    const timer = setTimeout(async () => {
      await this.stationService.removeOnlineUser(station, user);
      const onlineCount = station.onlineUserIds.length;
      this.logger.log(
        `Station [${station.slug}], user [${user.username}] has been removed due to inactive (${onlineCount} online now).`,
      );
    }, parseInt(this.configService.get(EnvVariables.RADIO_SERVER_USER_INACTIVE_TIMEOUT)));

    this.aliveUsersMap[this.createAliveUserKey(station, user)] = { timer, user };

    const stationsWithOnlineUser = await this.stationService.findStationsByOnlineUser(user);
    const joinedStations = stationsWithOnlineUser.filter(joinedStation => joinedStation.id !== station.id);
    await Promise.all(
      joinedStations.map(async joinedStation => {
        await this.stationService.removeOnlineUser(joinedStation, user);
        await this.pubSub.publish<RealTimeStationEvent.UserLeftPayload>(RealTimeStationEvent.USER_LEFT, {
          user,
          station: joinedStation,
        });
      }),
    );
  }

  private async onUserLeft(payload: RealTimeStationEvent.UserLeftPayload) {
    const { user, station } = payload;

    const aliveUser = this.aliveUsersMap[this.createAliveUserKey(station, user)];
    if (aliveUser) {
      const onlineCount = station.onlineUserIds.length;
      this.logger.log(
        `Station [${station.slug}], user [${user.username}] has left the station (${onlineCount} online now).`,
      );
      clearTimeout(aliveUser.timer);
      delete this.aliveUsersMap[this.createAliveUserKey(station, user)];
    }
  }

  private createAliveUserKey(station: Station, user: User) {
    return `${station.slug}/${user.username}`;
  }
}
