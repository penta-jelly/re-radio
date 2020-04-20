import {
  CanActivate,
  ExecutionContext,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { User } from '../../user/entities/user.entity';
import { UserRoleService } from '../../user/services/user-role.service';
import { UserService } from '../../user/services/user.service';
import { AllowedRoles, ROLE_KEY } from '../decorators/Roles.decorator';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  private logger = new Logger(AuthorizationGuard.name);

  constructor(
    private readonly reflector: Reflector,
    @Inject(forwardRef(() => UserService)) private readonly usersService: UserService,
    @Inject(forwardRef(() => UserRoleService)) private readonly userRoleService: UserRoleService,
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

    user.roles = await this.userRoleService.find({ where: { user: { id: user.id } } });

    if (user.roles) {
      const result = await Promise.all(
        allowedRoles.map((role) => {
          if (typeof role === 'function') {
            return role({ user, args, info });
          } else {
            return user.roles.some((userRole) => userRole.role === role);
          }
        }),
      );
      const allowed = result.some((a) => a === true);
      if (!allowed) throw new UnauthorizedException();
    }
    return true;
  }
}
