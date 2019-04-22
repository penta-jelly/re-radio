import { ApolloClient, ApolloLink, InMemoryCache } from 'apollo-boost';
import { createUploadLink } from 'apollo-upload-client';

export function initApollo() {
  let uri = '';
  if (process.env.NODE_ENV !== 'production') {
    uri = `http://${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}`;
  }

  const httpLink = createUploadLink({
    uri: `${uri}/graphql`,
  });

  const authLink = new ApolloLink((operation, next) => {
    const token = localStorage.getItem('token');

    operation.setContext((context: Context) => ({
      ...context,
      headers: {
        ...context.headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    }));

    return next ? next(operation) : null;
  });

  return new ApolloClient({ link: authLink.concat(httpLink), cache: new InMemoryCache() });
}

interface Context {
  headers: {
    [key: string]: string;
  };
}
