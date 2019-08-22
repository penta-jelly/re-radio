import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { PageLoader } from 'components/page-loader';

import { theme } from 'lib/@material-ui/theme';
import { initApollo } from 'lib/apollo/init';

import { initI18n } from 'lib/react-i18next';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { AppRouter } from './router';

initI18n();
const apolloClient = initApollo();

export const App: React.FunctionComponent<{}> = (): React.ReactElement<{}> => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apolloClient}>
      <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
        <React.Suspense fallback={<PageLoader />}>
          <AppRouter />
        </React.Suspense>
      </SnackbarProvider>
    </ApolloProvider>
    <CssBaseline />
  </ThemeProvider>
);
