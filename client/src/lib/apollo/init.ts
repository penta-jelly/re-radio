import { ApolloClient, ApolloLink, InMemoryCache } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { createUploadLink } from 'apollo-upload-client';
import { getMainDefinition } from 'apollo-utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws';

export interface AppClient {
  healthEndpoint: string;
  subscription: SubscriptionClient;
  apollo: ApolloClient<any>;
}

export function initClient(): AppClient {
  let host = window.location.host;
  if (process.env.NODE_ENV !== 'production') {
    host = `${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}`;
  }

  const healthEndpoint = `http://${host}/status`;

  const httpLink = createUploadLink({ uri: `http://${host}/graphql` });

  const subscriptionClient = new SubscriptionClient(`ws://${host}/graphql`, {
    reconnect: false,
    connectionParams: () => {
      const token = localStorage.getItem('token');
      return { Authorization: token };
    },
  });
  const wsLink = new WebSocketLink(subscriptionClient);

  const link = ApolloLink.split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink,
  );

  const authLink = new ApolloLink((operation, next) => {
    const token = localStorage.getItem('token');

    operation.setContext((context: Context) => ({
      ...context,
      headers: {
        ...context.headers,
        Authorization: token,
      },
    }));

    return next ? next(operation) : null;
  });

  return {
    healthEndpoint,
    apollo: new ApolloClient({ link: ApolloLink.from([authLink, link]), cache: new InMemoryCache() }),
    subscription: subscriptionClient,
  };
}

interface Context {
  headers: {
    [key: string]: string;
  };
}
