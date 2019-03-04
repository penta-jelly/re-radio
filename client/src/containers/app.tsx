import React from 'react';
import { install, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from 'react-apollo';

import { theme } from '../lib/@material-ui/theme';
import { initApollo } from '../lib/apollo/init';

import { Router } from './router';

install();

const apolloClient = initApollo();

export const App: React.FunctionComponent<{}> = (): React.ReactElement<{}> => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apolloClient}>
      <Router />
    </ApolloProvider>
    <CssBaseline />
  </ThemeProvider>
);
