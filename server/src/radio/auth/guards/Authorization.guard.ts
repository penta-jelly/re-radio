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
    const { req } = GqlExecutionContext.create(context).getContext();
    const args = GqlExecutionContext.create(context).getArgs();
    this.logger.log(args);
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
      const allowed = allowedRoles.some(allowedRole => {
        if (Array.isArray(allowedRole)) {
          const [role, validate] = allowedRole;
          this.logger.log(`First array: ${user.roles.some(userRole => userRole.role === role)}`);
          this.logger.log(`Last: ${validate(user, args)}`);
          return user.roles.some(userRole => userRole.role === role) && validate(user, args);
        } else {
          this.logger.log(`First string: ${user.roles.some(userRole => userRole.role === allowedRole)}`);
          return user.roles.some(userRole => userRole.role === allowedRole);
        }
      });
      if (!allowed) throw new UnauthorizedException();
    }
    return true;
  }
}
