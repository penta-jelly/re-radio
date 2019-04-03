import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from 'react-apollo-hooks';

import { initI18n } from '../lib/react-i18next';

import { theme } from '../lib/@material-ui/theme';
import { initApollo } from '../lib/apollo/init';
import { PageLoader } from '../components/page-loader';

import { AppRouter } from './router';

initI18n();
const apolloClient = initApollo();

export const App: React.FunctionComponent<{}> = (): React.ReactElement<{}> => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apolloClient}>
      <React.Suspense fallback={<PageLoader />}>
        <AppRouter />
      </React.Suspense>
    </ApolloProvider>
    <CssBaseline />
  </ThemeProvider>
);
