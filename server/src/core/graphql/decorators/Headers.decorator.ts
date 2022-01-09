import { createParamDecorator, ExecutionContext, InternalServerErrorException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';

export const Headers = createParamDecorator((headerName: string | undefined, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  const req: Request | undefined = ctx.getContext()?.req;
  if (!req) {
    throw new InternalServerErrorException('Could not locate req under application context');
  }
  const headers = req.headers;
  if (headerName) {
    const header = req.header(headerName);
    console.log(header);
    return header;
  }
  console.log(headers);
  return headers;
});
