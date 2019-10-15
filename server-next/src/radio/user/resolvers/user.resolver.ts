import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, ResolveProperty, Resolver, Root } from '@nestjs/graphql';
import { PaginationInput } from 'core/graphql/input/pagination';
import { Roles } from 'radio/auth/decorators/Roles.decorator';
import { AuthenticationGuard } from 'radio/auth/guards/Authentication.guard';
import { AuthorizationGuard } from 'radio/auth/guards/Authorization.guard';
import { UserRoleEnum } from 'radio/user/entities/user-role.entity';
import { UserRoleDTO } from '../dto/user-role.dto';
import { UserDTO } from '../dto/user.dto';
import { UserRoleService } from '../services/user-role.service';
import { UserService } from '../services/user.service';
import {
  UserCreateInput,
  UserFindAllOrderInput,
  UserFindAllWhereInput,
  UserFindOneWhereInput,
  UserUpdateInput,
} from '../user.input';

@Resolver(of => UserDTO)
export class UserResolver {
  constructor(private readonly userService: UserService, private readonly userRoleService: UserRoleService) {}

  @ResolveProperty(returns => [UserRoleDTO])
  async roles(@Root() user: UserDTO) {
    return this.userRoleService.find({ where: { user: { id: user.id } } });
  }

  @Query(returns => [UserDTO])
  async users(
    @Args({ name: 'pagination', nullable: true, type: () => PaginationInput }) pagination: PaginationInput,
    @Args({ name: 'where', nullable: true, type: () => UserFindAllWhereInput }) where: UserFindAllWhereInput,
    @Args({ name: 'order', nullable: true, type: () => UserFindAllOrderInput }) order: UserFindAllOrderInput,
  ) {
    return this.userService.find({ ...pagination, where, order });
  }

  @Query(returns => UserDTO)
  async user(@Args({ name: 'where', nullable: true, type: () => UserFindOneWhereInput }) where: UserFindOneWhereInput) {
    return this.userService.findOneOrFail({ where });
  }

  @Mutation(returns => UserDTO)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles([UserRoleEnum.ADMIN])
  async createUser(@Args({ name: 'data', nullable: true, type: () => UserCreateInput }) data: UserCreateInput) {
    return this.userService.create(data);
  }

  @Mutation(returns => Boolean)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles([UserRoleEnum.ADMIN])
  async updateUser(
    @Args({ name: 'where', nullable: true, type: () => UserFindOneWhereInput }) where: UserFindOneWhereInput,
    @Args({ name: 'data', nullable: true, type: () => UserUpdateInput }) data: UserUpdateInput,
  ) {
    await this.userService.update(where, data);
    return true;
  }

  @Mutation(returns => Boolean)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles([UserRoleEnum.ADMIN])
  async deleteUser(
    @Args({ name: 'where', nullable: true, type: () => UserFindOneWhereInput }) where: UserFindOneWhereInput,
  ) {
    await this.userService.delete(where);
    return true;
  }
}
