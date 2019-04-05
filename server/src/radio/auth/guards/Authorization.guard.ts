import {
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { User } from '../../../prisma/prisma.binding';
import { PrismaService } from '../../../prisma/prisma.service';
import { UsersService } from '../../users/user.service';
import { AllowedRoles, ROLE_KEY } from '../decorators/Roles.decorator';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  private logger = new Logger(AuthorizationGuard.name);

  constructor(
    private readonly reflector: Reflector,
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const allowedRoles = this.reflector.get<AllowedRoles[]>(ROLE_KEY, context.getHandler());
    if (!allowedRoles) {
      return true;
    }
    const executionContext = GqlExecutionContext.create(context);
    const { req } = executionContext.getContext();
    const args = executionContext.getArgs();
    const info = executionContext.getInfo<GraphQLResolveInfo>();

    const user: User = req.user;
    if (!user) {
      throw new InternalServerErrorException(
        'Could not find user under execution context. Please make sure AuthenticationGuard are defined first.',
      );
    }

    const [roles, stations] = await Promise.all([
      this.prisma.query.userRoles({ where: { user: { id: user.id } } }),
      this.prisma.query.stations({ where: { owner: { id: user.id } } }),
    ]);
    user.roles = roles;
    user.stations = stations;

    if (user.roles) {
      const result = await Promise.all(
        allowedRoles.map(role => {
          if (typeof role === 'function') {
            return role({ user, args, info, services: { prisma: this.prisma } });
          } else {
            return user.roles.some(userRole => userRole.role === role);
          }
        }),
      );
      const allowed = result.some(a => a === true);
      if (!allowed) throw new UnauthorizedException();
    }
    return true;
  }
}
