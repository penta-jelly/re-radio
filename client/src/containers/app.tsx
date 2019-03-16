import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from 'react-apollo-hooks';

// Initialize react-i18next
import '../lib/react-i18next';

import { theme } from '../lib/@material-ui/theme';
import { initApollo } from '../lib/apollo/init';

import { Home } from '../pages';
// import { Router } from './router';

const apolloClient = initApollo();

export const App: React.FunctionComponent<{}> = (): React.ReactElement<{}> => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apolloClient}>
      <Home />
      {/* <Router /> */}
    </ApolloProvider>
    <CssBaseline />
  </ThemeProvider>
);
