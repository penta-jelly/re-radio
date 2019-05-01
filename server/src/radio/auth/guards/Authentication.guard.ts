import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../../prisma/prisma.binding';

@Injectable()
export class AuthenticationGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  handleRequest<IUser = User>(err: Error, user?: IUser) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
