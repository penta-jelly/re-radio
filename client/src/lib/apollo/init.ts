import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { setContext } from 'apollo-link-context';

export function initApollo() {
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_BACKEND_ENDPOINT,
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
