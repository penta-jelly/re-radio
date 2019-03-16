import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { setContext } from 'apollo-link-context';

export function initApollo() {
  const httpLink = new HttpLink({
    uri: `http://${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}`,
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');

    return {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    };
  });

  return new ApolloClient({ link: authLink.concat(httpLink), cache: new InMemoryCache() });
}
