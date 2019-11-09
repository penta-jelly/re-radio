import { forwardRef, Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, ResolveProperty, Resolver, Root } from '@nestjs/graphql';
import { PaginationInput } from 'core/graphql/input/pagination';
import { CurrentUser } from 'radio/auth/decorators/CurrentUser.decorator';
import { Roles } from 'radio/auth/decorators/Roles.decorator';
import { AuthenticationGuard } from 'radio/auth/guards/Authentication.guard';
import { AuthorizationGuard } from 'radio/auth/guards/Authorization.guard';
import { SongDTO } from 'radio/song/dto/song.dto';
import { UserRoleDTO } from 'radio/user/dto/user-role.dto';
import { UserRoleEnum } from 'radio/user/entities/user-role.entity';
import { User } from 'radio/user/entities/user.entity';
import { UserRoleService } from 'radio/user/services/user-role.service';
import { UserService } from 'radio/user/services/user.service';
import { PubSub } from 'core/pub-sub/pub-sub.service';
import { RealTimeStationEvent } from 'real-time-radio/real-time-stations/real-time-station.event';
import { StationTagDTO } from '../dto/station-tag.dto';
import { StationDTO } from '../dto/station.dto';
import { StationTagService } from '../services/station-tag.service';
import { StationService } from '../services/station.service';
import {
  StationCreateInput,
  StationFindAllOrderInput,
  StationFindAllWhereInput,
  StationFindOneWhereInput,
} from '../station.input';

@Resolver(of => StationDTO)
export class StationResolver {
  constructor(
    private readonly stationService: StationService,
    private readonly stationTagService: StationTagService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(forwardRef(() => UserRoleService))
    private readonly userRoleService: UserRoleService,
    private readonly pubSub: PubSub,
  ) {}

  @ResolveProperty(returns => [UserRoleDTO])
  async userRoles(@Root() station: StationDTO) {
    return this.userRoleService.find({ where: { station: { id: station.id } } });
  }

  @ResolveProperty(returns => [SongDTO])
  async playingSong(@Root() station: StationDTO) {
    const { playingSong } = await this.stationService.findOneOrFail({
      where: { id: station.id },
      relations: ['playingSong'],
    });
    return playingSong;
  }

  @ResolveProperty(returns => [StationTagDTO])
  async tags(@Root() station: StationDTO) {
    const { tags } = await this.stationService.findOneOrFail({
      where: { id: station.id },
      relations: ['tags'],
    });
    return tags;
  }

  @Query(returns => [StationDTO])
  async stations(
    @Args({ name: 'pagination', nullable: true, type: () => PaginationInput }) pagination: PaginationInput,
    @Args({ name: 'where', nullable: 'itemsAndList', type: () => [StationFindAllWhereInput] })
    where: StationFindAllWhereInput[],
    @Args({ name: 'order', nullable: true, type: () => StationFindAllOrderInput }) order: StationFindAllOrderInput,
  ) {
    return this.stationService.find({ ...pagination, where, order });
  }

  @Query(returns => StationDTO)
  async station(@Args({ name: 'where', type: () => StationFindOneWhereInput }) where: StationFindOneWhereInput) {
    return this.stationService.findOneOrFail({ where });
  }

  @Mutation(returns => StationDTO)
  @UseGuards(AuthenticationGuard)
  async createStation(
    @Args({ name: 'data', type: () => StationCreateInput }) data: StationCreateInput,
    @CurrentUser() user: User,
  ) {
    return await this.stationService.create(data, user);
  }

  @Mutation(returns => Boolean)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles([UserRoleEnum.ADMIN])
  async deleteStation(@Args({ name: 'where', type: () => StationFindOneWhereInput }) where: StationFindOneWhereInput) {
    await this.stationService.delete(where);
    return true;
  }

  @Mutation(returns => Boolean)
  @UseGuards(AuthenticationGuard)
  async joinStation(
    @Args({ name: 'where', type: () => StationFindOneWhereInput }) where: StationFindOneWhereInput,
    @CurrentUser() user: User,
  ) {
    const station = await this.stationService.findOneOrFail({ where });
    const success = await this.stationService.addOnlineUser(station, user);
    await this.pubSub.publish<RealTimeStationEvent.UserJoinPayload>(RealTimeStationEvent.USER_JOINED, {
      user,
      station,
    });
    return success;
  }

  @Mutation(returns => Boolean)
  @UseGuards(AuthenticationGuard)
  async leaveStation(
    @Args({ name: 'where', type: () => StationFindOneWhereInput }) where: StationFindOneWhereInput,
    @CurrentUser() user: User,
  ) {
    const station = await this.stationService.findOneOrFail({ where });
    const success = await this.stationService.removeOnlineUser(station, user);
    await this.pubSub.publish<RealTimeStationEvent.UserLeftPayload>(RealTimeStationEvent.USER_LEFT, {
      user,
      station,
    });
    return success;
  }
}
