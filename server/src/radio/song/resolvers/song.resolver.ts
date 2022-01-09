import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, ResolveField, Resolver, Root } from '@nestjs/graphql';
import { PaginationInput } from '../../../core/graphql/input/pagination';
import { CurrentUser } from '../../auth/decorators/CurrentUser.decorator';
import { Roles } from '../../auth/decorators/Roles.decorator';
import { AuthenticationGuard } from '../../auth/guards/Authentication.guard';
import { AuthorizationGuard } from '../../auth/guards/Authorization.guard';
import { StationDTO } from '../../station/dto/station.dto';
import { UserDTO } from '../../user/dto/user.dto';
import { UserRoleEnum } from '../../user/entities/user-role.entity';
import { User } from '../../user/entities/user.entity';
import { SongDTO } from '../dto/song.dto';
import { SongService } from '../services/song.service';
import { SongCreateInput, SongFindAllOrderInput, SongFindAllWhereInput, SongFindOneWhereInput } from '../song.input';

@Resolver((of) => SongDTO)
export class SongResolver {
  constructor(private readonly songService: SongService) {}

  @ResolveField((returns) => UserDTO)
  async creator(@Root() song: SongDTO) {
    const { creator } = await this.songService.findOneOrFail({ where: { id: song.id }, relations: ['creator'] });
    return creator;
  }

  @ResolveField((returns) => StationDTO)
  async station(@Root() song: SongDTO) {
    const { station } = await this.songService.findOneOrFail({ where: { id: song.id }, relations: ['station'] });
    return station;
  }

  @Query((returns) => [SongDTO])
  async songs(
    @Args({ name: 'pagination', nullable: true, type: () => PaginationInput }) pagination: PaginationInput,
    @Args({ name: 'where', nullable: 'itemsAndList', type: () => [SongFindAllWhereInput] })
    where: SongFindAllWhereInput[],
    @Args({ name: 'order', nullable: true, type: () => SongFindAllOrderInput }) order: SongFindAllOrderInput,
  ) {
    return this.songService.find({ ...pagination, where, order });
  }

  @Query((returns) => SongDTO)
  async song(@Args({ name: 'where', type: () => SongFindOneWhereInput }) where: SongFindOneWhereInput) {
    return this.songService.findOneOrFail({ where });
  }

  @Mutation((returns) => SongDTO)
  @UseGuards(AuthenticationGuard)
  async createSong(
    @Args({ name: 'data', type: () => SongCreateInput }) data: SongCreateInput,
    @CurrentUser() user: User,
  ) {
    return await this.songService.create(data, user);
  }

  @Mutation((returns) => Boolean)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles([UserRoleEnum.ADMIN])
  async deleteSong(@Args({ name: 'where', type: () => SongFindOneWhereInput }) where: SongFindOneWhereInput) {
    await this.songService.delete(where);
    return true;
  }
}
