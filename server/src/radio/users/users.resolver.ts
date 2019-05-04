import { InternalServerErrorException, Logger, NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { FilesService } from 'core/files/files.service';
import { BatchPayload, User, UserWhereInput, UserWhereUniqueInput } from 'prisma/prisma.binding';
import { PrismaService } from 'prisma/prisma.service';
import { RoleDecoratorParam, Roles } from '../auth/decorators/Roles.decorator';
import { AuthenticationGuard } from '../auth/guards/Authentication.guard';
import { AuthorizationGuard } from '../auth/guards/Authorization.guard';
import { UserCreateInputDTO } from './dto/UserCreateInput.dto';
import { UserUpdateAvatarDTO, UserUpdateInputDTO } from './dto/UserUpdateInput.dto';
import { UsersService } from './user.service';

@Resolver()
export class UsersResolver {
  private readonly logger = new Logger(UsersResolver.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly filesService: FilesService,
  ) {}

  @Query('users')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN'])
  async getUsers(@Args() args, @Info() info): Promise<User[]> {
    return await this.prisma.query.users(args, info);
  }

  @Query('user')
  async getUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.query.user(args, info);
  }

  @Mutation('createUser')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN'])
  async createUser(@Args() args: UserCreateInputDTO, @Info() info): Promise<User> {
    return await this.usersService.createUser(args, info);
  }

  @Mutation('updateUser')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN', UsersResolver.profileOwner])
  async updateUser(@Args() args: UserUpdateInputDTO, @Info() info): Promise<User> {
    return await this.usersService.updateUser(args, info);
  }

  @Mutation('updateManyUsers')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN'])
  async updateManyUsers(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.usersService.updateManyUsers(args, info);
  }

  @Mutation('deleteUser')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN'])
  async deleteUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.mutation.deleteUser(args, info);
  }

  @Mutation('deleteManyUsers')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN'])
  async deleteManyUsers(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteManyUsers(args, info);
  }

  @Subscription('user')
  onUserMutation(@Args() args, @Info() info) {
    return this.prisma.subscription.user(args, info);
  }

  @Mutation('updateUserAvatar')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN', UsersResolver.profileOwner])
  async uploadUserAvatar(@Args() args: UserUpdateAvatarDTO) {
    const user = await this.prisma.query.user(args);
    if (!user) throw new NotFoundException();

    const file = await args.file;
    try {
      const { hashedFilename } = await this.filesService.storeFile(file.createReadStream(), file.filename);
      await this.prisma.mutation.updateUser({ where: args.where, data: { avatarUrl: hashedFilename } });
      return hashedFilename;
    } catch (e) {
      this.logger.error(e, e.stack);
      throw new InternalServerErrorException(`Could not store ${file.filename}.`);
    }
  }

  static profileOwner({ user, args: { where } }: RoleDecoratorParam<{ where: UserWhereUniqueInput | UserWhereInput }>) {
    return user.id === where.id || user.email === where.email || user.username === where.username;
  }
}
