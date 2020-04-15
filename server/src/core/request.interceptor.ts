import Util from 'util';
import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export const COLOR_RED = '\x1b[31m';
export const COLOR_GREEN = '\x1b[32m';
export const COLOR_YELLOW = '\x1b[33m';
export const COLOR_RESET = '\x1b[0m';

@Injectable()
export class RequestsInterceptor implements NestInterceptor {
  private logger = new Logger(RequestsInterceptor.name, false);

  intercept(context: ExecutionContext, next: CallHandler<unknown>): Observable<unknown> {
    if (context.getArgs().length === 4) {
      const ctx = GqlExecutionContext.create(context);
      const info = ctx.getInfo<GraphQLResolveInfo>();
      const operation = info.operation.operation.toUpperCase();
      const before = Date.now();
      const rawArgs = Util.inspect(ctx.getArgs(), { depth: 5, breakLength: 120 });
      return next
        .handle()
        .pipe(
          tap(() =>
            this.logger.log(
              `${COLOR_RESET}${operation} ${info.fieldName} ${this.colorizeDiffTime(before)}\n[Args: ${rawArgs}]`,
            ),
          ),
        );
    }
    return next.handle();
  }

  private colorizeDiffTime(before: number) {
    const diff = Date.now() - before;
    if (diff < 1500) {
      return `${COLOR_GREEN}[${diff}ms]${COLOR_RESET}`;
    }
    if (diff < 5000) {
      return `${COLOR_YELLOW}[SLOW][${diff}ms]${COLOR_RESET}`;
    }
    return `${COLOR_RED}[TOO SLOW][${diff}ms]${COLOR_RESET}`;
  }
}
