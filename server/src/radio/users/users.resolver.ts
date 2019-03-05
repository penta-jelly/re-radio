import { UseGuards, Logger } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { BatchPayload, User } from 'prisma/prisma.binding';
import { PrismaService } from 'prisma/prisma.service';
import { Roles } from 'radio/auth/decorators/Roles.decorator';
import { AuthenticationGuard } from 'radio/auth/guards/Authentication.guard';
import { AuthorizationGuard } from 'radio/auth/guards/Authorization.guard';
import { UserCreateInputDTO } from './dto/UserCreateInput.dto';
import { UserUpdateInputDTO } from './dto/UserUpdateInput.dto';
import { UsersService } from './user.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly prisma: PrismaService, private readonly usersService: UsersService) {}

  @Query('users')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles('ADMIN')
  async getUsers(@Args() args, @Info() info): Promise<User[]> {
    return await this.prisma.query.users(args, info);
  }

  @Query('user')
  async getUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.query.user(args, info);
  }

  @Mutation('createUser')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles('ADMIN')
  async createUser(@Args() args: UserCreateInputDTO, @Info() info): Promise<User> {
    return await this.usersService.createUser(args, info);
  }

  @Mutation('updateUser')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles('ADMIN')
  async updateUser(@Args() args: UserUpdateInputDTO, @Info() info): Promise<User> {
    return await this.usersService.updateUser(args, info);
  }

  @Mutation('updateManyUsers')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles('ADMIN')
  async updateManyUsers(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.usersService.updateManyUsers(args, info);
  }

  @Mutation('deleteUser')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles('ADMIN')
  async deleteUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.mutation.deleteUser(args, info);
  }

  @Mutation('deleteManyUsers')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles('ADMIN')
  async deleteManyUsers(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteManyUsers(args, info);
  }

  @Subscription('user')
  onUserMutation() {
    return {
      subscribe: (obj, args, ctx, info) => {
        return this.prisma.subscription.user(args, info);
      },
    };
  }
}
