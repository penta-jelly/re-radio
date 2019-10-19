import {
  ArgumentsHost,
  Catch,
  HttpException,
  Logger,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { COLOR_RED, COLOR_RESET } from 'core/request.interceptor';
import { GraphQLResolveInfo } from 'graphql';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import { QueryFailedError } from 'typeorm/error/QueryFailedError';

export type CatchableException = HttpException | QueryFailedError | EntityNotFoundError;

@Catch(HttpException, QueryFailedError, EntityNotFoundError)
export class RadioExceptionFilter implements GqlExceptionFilter {
  private readonly logger = new Logger(RadioExceptionFilter.name);

  catch(exception: CatchableException, host: ArgumentsHost) {
    const ctx = GqlArgumentsHost.create(host);
    const info = ctx.getInfo<GraphQLResolveInfo>();
    const rawArgs = JSON.stringify(ctx.getArgs());
    this.log(exception, info, rawArgs);
    return this.transformException(exception);
  }

  transformException(exception: CatchableException) {
    let newException = exception;
    if (exception instanceof QueryFailedError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      newException = new UnprocessableEntityException((exception as any).detail || exception.message);
    } else if (exception instanceof EntityNotFoundError) {
      newException = new NotFoundException(exception.message);
    }
    return newException;
  }

  log(exception: CatchableException, info: GraphQLResolveInfo, rawArgs: string) {
    const operation = info.operation.operation.toUpperCase();
    let message = 'Unknown';
    if (exception instanceof QueryFailedError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      exception.message = (exception as any).detail || exception.message;
      message = exception.message;
    } else if (exception instanceof EntityNotFoundError) {
      message = exception.message;
    } else if (exception instanceof HttpException) {
      message = exception.toString();
    }

    this.logger.log(`${COLOR_RED}[ERROR]${COLOR_RESET} ${operation} ${info.fieldName} "${message}" [Args: ${rawArgs}]`);
    console.trace(exception.stack);
    return message;
  }
}
