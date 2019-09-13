import { BadRequestException, UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import {
  BatchPayload,
  Station,
  StationConnection,
  StationWhereInput,
  StationWhereUniqueInput,
} from 'prisma/prisma.binding';
import { PrismaService } from 'prisma/prisma.service';
import { RoleDecoratorParam, Roles } from '../auth/decorators/Roles.decorator';
import { AuthenticationGuard } from '../auth/guards/Authentication.guard';
import { AuthorizationGuard } from '../auth/guards/Authorization.guard';
import { StationCreateInputDTO } from './dto/StationCreateInput.dto';
import { StationUpdateInputDTO } from './dto/StationUpdateInput.dto';
import { StationsService } from './stations.service';

@Resolver()
export class StationsResolver {
  constructor(private readonly prisma: PrismaService, private readonly stationsService: StationsService) {}

  @Query('stationsConnection')
  async getStationConnection(@Args() args, @Info() info): Promise<StationConnection[]> {
    return await this.prisma.query.stationsConnection(args, info);
  }

  @Query('stations')
  async getStations(@Args() args, @Info() info): Promise<Station[]> {
    return await this.prisma.query.stations(args, info);
  }

  @Query('station')
  async getStation(@Args() args, @Info() info): Promise<Station> {
    return await this.prisma.query.station(args, info);
  }

  @Mutation('createStation')
  @UseGuards(AuthenticationGuard)
  async createStation(@Args() args: StationCreateInputDTO, @Info() info): Promise<Station> {
    if (!args.data.userRoles) {
      throw new BadRequestException('You must specify a user role, e.g.: STATION_OWNER');
    }
    return await this.prisma.mutation.createStation(args, info);
  }

  @Mutation('updateStation')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN', StationsResolver.stationOwnerChecker, StationsResolver.stationAdminChecker])
  async updateStation(@Args() args: StationUpdateInputDTO, @Info() info): Promise<Station> {
    const { userRoles } = args.data;
    if (userRoles) {
      const create = Array.isArray(userRoles.create) ? userRoles.create : [userRoles.create];
      create.forEach(({ role }) => {
        if (role !== 'STATION_ADMIN' && role !== 'STATION_OWNER')
          throw new BadRequestException('Only STATION_ADMIN & STATION_OWNER roles are allowed to be updated.');
      });
    }
    return await this.prisma.mutation.updateStation(args, info);
  }

  @Mutation('updateManyStations')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN'])
  async updateManyStations(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.updateManyStations(args, info);
  }

  @Mutation('deleteStation')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN', StationsResolver.stationOwnerChecker])
  async deleteStation(@Args() args, @Info() info): Promise<Station> {
    return await this.prisma.mutation.deleteStation(args, info);
  }

  @Mutation('deleteManyStations')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN'])
  async deleteManyStations(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteManyStations(args, info);
  }

  @Subscription('station')
  onStationMutation(@Args() args, @Info() info) {
    return this.prisma.subscription.station(args, info);
  }

  static async stationOwnerChecker({
    user,
    args: { where },
  }: RoleDecoratorParam<{ where: StationWhereUniqueInput | StationWhereInput }>) {
    return user.roles.some(userRole => {
      if (userRole.role !== 'STATION_OWNER' || !userRole.station) return false;
      const { id, name, slug } = userRole.station;
      return where.id === id || where.name === name || where.slug === slug;
    });
  }

  static async stationAdminChecker({
    user,
    args: { where },
  }: RoleDecoratorParam<{ where: StationWhereUniqueInput | StationWhereInput }>) {
    return user.roles.some(userRole => {
      if (userRole.role !== 'STATION_ADMIN' || !userRole.station) return false;
      const { id, name, slug } = userRole.station;
      return where.id === id || where.name === name || where.slug === slug;
    });
  }
}
