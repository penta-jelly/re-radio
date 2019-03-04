import {
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User, UserRoleEnum } from 'prisma/prisma.binding';
import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from 'radio/users/user.service';
import { ROLE_KEY } from '../decorators/Roles.decorator';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<UserRoleEnum[]>(ROLE_KEY, context.getHandler());
    if (!roles) {
      return true;
    }
    const { req } = GqlExecutionContext.create(context).getContext();
    const user: User = req.user;
    if (!user) {
      throw new InternalServerErrorException(
        'Could not find user under execution context. Please make sure AuthenticationGuard are defined first.',
      );
    }
    const userRoles = await this.prisma.query.userRoles({ where: { user: { id: user.id } } });
    if (userRoles) {
      const role = userRoles.filter(userRole => roles.includes(userRole.role))[0];
      if (!role) throw new UnauthorizedException();
      // TODO: Resolve ADMIN role
      // TODO: Resolve STATION_OWNER role
    }
    return true;
  }
}
