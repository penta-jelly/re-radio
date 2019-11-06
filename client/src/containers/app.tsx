import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { theme } from 'lib/@material-ui/theme';
import { initClient, AppClient } from 'lib/apollo/init';
import { initI18n } from 'lib/react-i18next';
import { AppRouter } from './router';

initI18n();
const initialClient = initClient();

interface IAppContext {
  client: AppClient;
  resetClient(): void;
}

export const AppContext = React.createContext<IAppContext>({ client: initialClient, resetClient() {} });

export const App: React.FC = () => {
  const [client, setClient] = React.useState(initialClient);
  const resetClient = React.useCallback(() => {
    setClient(client => {
      client.subscription.close(true);
      client.apollo.stop();
      return initClient();
    });
  }, []);

  return (
    <AppContext.Provider value={{ client, resetClient }}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client.apollo}>
          <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
            <AppRouter />
          </SnackbarProvider>
        </ApolloProvider>
        <CssBaseline />
      </ThemeProvider>
    </AppContext.Provider>
  );
};
