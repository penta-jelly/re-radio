import { BadRequestException, UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { BatchPayload, StationTag } from 'prisma/prisma.binding';
import { PrismaService } from 'prisma/prisma.service';
import { StationTagsService } from 'radio/station-tags/station-tags.service';
import { Roles } from '../auth/decorators/Roles.decorator';
import { AuthenticationGuard } from '../auth/guards/Authentication.guard';
import { AuthorizationGuard } from '../auth/guards/Authorization.guard';

@Resolver()
export class StationTagsResolver {
  constructor(private readonly prisma: PrismaService, private readonly stationTagsService: StationTagsService) {}

  @Query('stationTags')
  async getStations(@Args() args, @Info() info): Promise<StationTag[]> {
    return await this.prisma.query.stationTags(args, info);
  }

  @Query('stationTag')
  async getStationTag(@Args() args, @Info() info): Promise<StationTag> {
    return await this.prisma.query.stationTag(args, info);
  }

  @Mutation('createStationTag')
  @UseGuards(AuthenticationGuard)
  @Roles(['ADMIN'])
  async createStationTag(@Args() args, @Info() info): Promise<StationTag> {
    return await this.prisma.mutation.createStationTag(args, info);
  }

  @Mutation('updateStationTag')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN'])
  async updateStationTag(@Args() args, @Info() info): Promise<StationTag> {
    return await this.prisma.mutation.updateStationTag(args, info);
  }

  @Mutation('updateManyStationTags')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN'])
  async updateManyStationTags(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.updateManyStationTags(args, info);
  }

  @Mutation('deleteStationTag')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN'])
  async deleteStationTag(@Args() args, @Info() info): Promise<StationTag> {
    return await this.prisma.mutation.deleteStationTag(args, info);
  }

  @Mutation('deleteManyStationTags')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN'])
  async deleteManyStationTags(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteManyStationTags(args, info);
  }

  @Subscription('stationTag')
  onStationMutation(@Args() args, @Info() info) {
    return this.prisma.subscription.stationTag(args, info);
  }
}
