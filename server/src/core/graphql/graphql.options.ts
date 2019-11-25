import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { ValidationError } from 'class-validator';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { ConnectionContext } from 'subscriptions-transport-ws';
import { WsEvent } from 'core/graphql/ws.event';
import { PubSub } from 'core/pub-sub/pub-sub.service';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  constructor(private readonly pubSub: PubSub) {}

  createGqlOptions(): GqlModuleOptions {
    type RadioWsConnectionContext = ConnectionContext & { connectionParams?: object };

    return {
      path: '/graphql',
      autoSchemaFile: 'schema.graphql',
      installSubscriptionHandlers: true,
      subscriptions: {
        keepAlive: 30000,
        onConnect: async (connectionParams, _, context: RadioWsConnectionContext) => {
          context.connectionParams = connectionParams;
          await this.pubSub.publish<WsEvent.ConnectedPayload>(WsEvent.Type.CONNECTED, { connectionParams });
        },
        onDisconnect: async (_, context: RadioWsConnectionContext) => {
          const { connectionParams } = context;
          if (connectionParams) {
            await this.pubSub.publish<WsEvent.DisconnectedPayload>(WsEvent.Type.DISCONNECTED, { connectionParams });
          }
        },
      },
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
      context: ({ req }) => {
        return { req };
      },
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
    }

    return formattedError;
  }

  private formatValidationError(errors: ValidationError[]): string {
    let message = 'Unknown validation message';
    let children = errors;
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
