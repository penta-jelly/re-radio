import { createParamDecorator, InternalServerErrorException } from '@nestjs/common';

export const CurrentUser = createParamDecorator((_, context) => {
  const gqlContext = context[2];
  if (!gqlContext || !gqlContext.req) {
    throw new InternalServerErrorException('Could not locate the request in application context');
  }
  if (!gqlContext.req.user) {
    throw new InternalServerErrorException('Could not locate user under request object in application context');
  }
  return gqlContext.req.user;
});
