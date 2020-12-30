import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws';

export interface AppClient {
  healthEndpoint: string;
  subscription: SubscriptionClient;
  apollo: ApolloClient<any>;
}

// TODO: setup apollo-upload-client
export function initClient(): AppClient {
  let host = window.location.host;
  if (process.env.NODE_ENV !== 'production') {
    host = `${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}`;
  }

  const healthEndpoint = `${isSecured() ? 'https' : 'http'}://${host}/status`;

  const batchLink = new HttpLink({ uri: `${isSecured() ? 'https' : 'http'}://${host}/graphql` });
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
  const httpLink = ApolloLink.from([authLink, batchLink]);

  const subscriptionClient = new SubscriptionClient(`${isSecured() ? 'wss' : 'ws'}://${host}/graphql`, {
    reconnect: true,
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

  return {
    healthEndpoint,
    apollo: new ApolloClient({ link, cache: new InMemoryCache() }),
    subscription: subscriptionClient,
  };
}

interface Context {
  headers: {
    [key: string]: string;
  };
}

function isSecured() {
  return window.location.protocol === 'https:';
}
