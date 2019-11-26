import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { theme } from 'lib/@material-ui/theme';
import { AppClient, initClient } from 'lib/apollo/init';
import { initI18n } from 'lib/react-i18next';
import { AppRouter } from './router';

initI18n();
const initialClient = initClient();

interface IAppContext {
  disconnected: boolean;
  client: AppClient;
  resetClient(): void;
}

export const AppContext = React.createContext<IAppContext>({
  client: initialClient,
  disconnected: false,
  resetClient() {},
});

export const App: React.FC = () => {
  const [client, setClient] = React.useState(initialClient);
  const subscribedOnDisconnectedRef = React.useRef(false);
  const isDisconnectedByServerRef = React.useRef(true);
  const [disconnected, setDisconnected] = React.useState(false);

  const resetClient = React.useCallback(() => {
    isDisconnectedByServerRef.current = false;
    setClient(client => {
      client.subscription.close(true);
      client.apollo.stop();
      subscribedOnDisconnectedRef.current = false;
      const newClient = initClient();
      isDisconnectedByServerRef.current = true;
      return newClient;
    });
  }, []);

  const retry = React.useCallback(async (endpoint: string, success: () => void, error?: () => void) => {
    const ping = () => fetch(endpoint);
    const postpone = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));
    let isSuccess = false;
    let delay = 2000;
    while (!isSuccess) {
      try {
        await postpone(delay);
        delay *= 2;
        const { status } = await ping();
        if (status < 400) {
          isSuccess = true;
          success();
        }
      } catch {}
    }
  }, []);

  React.useEffect(() => {
    if (!subscribedOnDisconnectedRef.current) {
      subscribedOnDisconnectedRef.current = true;
      client.subscription.onDisconnected(() => {
        if (isDisconnectedByServerRef.current) {
          const timeout = setTimeout(() => setDisconnected(true), 5000);
          retry(client.healthEndpoint, () => {
            clearTimeout(timeout);
            resetClient();
            setDisconnected(false);
          });
        }
      });
    }
  }, [client, resetClient, retry]);

  return (
    <AppContext.Provider value={{ client, resetClient, disconnected }}>
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
