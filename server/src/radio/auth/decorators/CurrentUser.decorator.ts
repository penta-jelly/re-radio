import { createParamDecorator, ExecutionContext, InternalServerErrorException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator((_, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  const user = ctx.getContext()?.req?.user;
  if (!user) {
    throw new InternalServerErrorException('Could not locate user under application context');
  }
  return user;
});
