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

  @UseGuards(AuthenticationGuard)
  @Mutation('createUser')
  @Roles('ADMIN')
  async createUser(@Args() args: UserCreateInputDTO, @Info() info): Promise<User> {
    return await this.usersService.createUser(args, info);
  }

  @UseGuards(AuthenticationGuard)
  @Mutation('updateUser')
  @Roles('ADMIN')
  async updateUser(@Args() args: UserUpdateInputDTO, @Info() info): Promise<User> {
    return await this.usersService.updateUser(args, info);
  }

  @UseGuards(AuthenticationGuard)
  @Mutation('updateManyUsers')
  @Roles('ADMIN')
  async updateManyUsers(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.usersService.updateManyUsers(args, info);
  }

  @UseGuards(AuthenticationGuard)
  @Mutation('deleteUser')
  @Roles('ADMIN')
  async deleteUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.mutation.deleteUser(args, info);
  }

  @UseGuards(AuthenticationGuard)
  @Mutation('deleteManyUsers')
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
