import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { BatchPayload, Station, StationWhereUniqueInput } from '../../prisma/prisma.binding';
import { PrismaService } from '../../prisma/prisma.service';
import { Roles } from '../auth/decorators/Roles.decorator';
import { AuthenticationGuard } from '../auth/guards/Authentication.guard';
import { AuthorizationGuard } from '../auth/guards/Authorization.guard';
import { StationCreateInputDTO } from './dto/StationCreateInput.dto';
import { StationUpdateInputDTO } from './dto/StationUpdateInput.dto';
import { StationsService } from './stations.service';

@Resolver()
export class StationsResolver {
  constructor(private readonly prisma: PrismaService, private readonly stationsService: StationsService) {}

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
    return await this.prisma.mutation.createStation(args, info);
  }

  @Mutation('updateStation')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles('ADMIN', [
    'STATION_OWNER',
    (user, { where }: StationUpdateInputDTO) =>
      user.stations.some(({ id, name, slug }) => where.id === id || where.name === name || where.slug === slug),
  ])
  async updateStation(@Args() args: StationUpdateInputDTO, @Info() info): Promise<Station> {
    return await this.prisma.mutation.updateStation(args, info);
  }

  @Mutation('updateManyStations')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles('ADMIN')
  async updateManyStations(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.updateManyStations(args, info);
  }

  @Mutation('deleteStation')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles('ADMIN', [
    'STATION_OWNER',
    (user, { where }: { where: StationWhereUniqueInput }) =>
      user.stations.some(({ id, name, slug }) => where.id === id || where.name === name || where.slug === slug),
  ])
  async deleteStation(@Args() args, @Info() info): Promise<Station> {
    return await this.prisma.mutation.deleteStation(args, info);
  }

  @Mutation('deleteManyStations')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles('ADMIN')
  async deleteManyStations(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteManyStations(args, info);
  }

  @Subscription('station')
  onStationMutation(@Args() args, @Info() info) {
    return this.prisma.subscription.station(args, info);
  }
}
