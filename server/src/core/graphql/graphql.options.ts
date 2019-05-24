import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { ValidationError } from 'class-validator';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { GraphQLUpload } from 'graphql-upload';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): GqlModuleOptions {
    return {
      typePaths: ['**/*.graphql'],
      path: '/graphql',
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      resolvers: {
        Upload: GraphQLUpload,
      },
      context: context => context,
      formatError: this.formatError.bind(this),
    };
  }

  formatError(error: GraphQLError): GraphQLFormattedError {
    let formattedError = error;

    if (this.isValidationError(error.message)) {
      formattedError = {
        ...error,
        message: this.formatValidationError(error.message.message),
      };
    } else if (this.isHttpExceptionError(error.message)) {
      formattedError = {
        ...error,
        message: this.formatHttpExceptionError(error.message),
      };
    }

    return formattedError;
  }

  private formatHttpExceptionError(error: { message?: string; error?: string }): string {
    return error.message || error.error;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private isHttpExceptionError(object: any): object is { message?: string; error?: string } {
    if (object && (object.message || object.error)) return true;
    return false;
  }

  private formatValidationError(errors: ValidationError[]): string {
    let message = 'Unknown validation message';
    let children = errors[0].children;
    while (children[0].children.length > 0) {
      children = children[0].children;
    }
    message = children[0].constraints[Object.keys(children[0].constraints)[0]];
    return message;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private isValidationError(object: any): object is { statusCode: number; error: string; message: ValidationError[] } {
    if (object && object.message && Array.isArray(object.message) && object.message[0] && object.message[0].target) {
      return true;
    }
    return false;
  }
}
