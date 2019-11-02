import { ApolloClient, ApolloLink, InMemoryCache } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { createUploadLink } from 'apollo-upload-client';
import { getMainDefinition } from 'apollo-utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws';

export function initApollo() {
  let uri = '';
  if (process.env.NODE_ENV !== 'production') {
    uri = `http://${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}`;
  }

  const httpLink = createUploadLink({
    uri: `${uri}/graphql`,
  });

  const subscriptionClient = new SubscriptionClient(
    `ws://${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}/graphql`,
    { reconnect: true },
  );
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

  return new ApolloClient({ link: ApolloLink.from([authLink, link]), cache: new InMemoryCache() });
}

interface Context {
  headers: {
    [key: string]: string;
  };
}
