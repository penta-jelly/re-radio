import { ArgumentsHost, Catch, HttpException, Logger } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { QueryFailedError } from 'typeorm/error/QueryFailedError';

@Catch(HttpException, QueryFailedError)
export class RadioExceptionFilter implements GqlExceptionFilter {
  private readonly logger = new Logger(RadioExceptionFilter.name, false);
  catch(exception: HttpException | QueryFailedError, host: ArgumentsHost) {
    const ctx = GqlArgumentsHost.create(host);
    const info = ctx.getInfo<GraphQLResolveInfo>();
    const operation = info.operation.operation.toUpperCase();
    const rawArgs = JSON.stringify(ctx.getArgs());
    let message = 'Unknown';
    if (exception instanceof HttpException) {
      message = exception.toString();
    } else if (exception instanceof QueryFailedError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      exception.message = (exception as any).detail || exception.message;
      message = exception.message;
    }
    this.logger.error(`[ERROR] ${operation} ${info.fieldName} "${message}" [Args: ${rawArgs}]`, exception.stack);
    return exception;
  }
}
