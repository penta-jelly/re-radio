import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { theme } from 'lib/@material-ui/theme';
import { AppClient, initClient } from 'lib/apollo/init';
import { initI18n } from 'lib/react-i18next';
import { ServiceWorkerContext } from '..';
import { AppRouter } from './router';
import { useStyles } from './styles';

initI18n();
const initialClient = initClient();

interface Props {
  serviceWorker: ServiceWorkerContext;
}

interface IAppContext {
  disconnected: boolean;
  client: AppClient;
  resetClient(): void;
  serviceWorker: ServiceWorkerContext;
}

export const AppContext = React.createContext<IAppContext>({
  client: initialClient,
  disconnected: false,
  resetClient() {},
  serviceWorker: { onSuccess: () => 0, onUpdate: () => 0, offSuccess: () => {}, offUpdate: () => {} },
});

export const App: React.FC<Props> = ({ serviceWorker }) => {
  const classes = useStyles();
  const [client, setClient] = React.useState(initialClient);
  const [disconnected, setDisconnected] = React.useState(false);

  const resetClient = React.useCallback(() => {
    setClient(client => {
      client.subscription.close(true);
      client.apollo.stop();
      return initClient();
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

  const reconnectingTimeoutRef = React.useRef<number | undefined>(undefined);
  React.useEffect(() => {
    client.subscription.onDisconnected(() => {
      if (!reconnectingTimeoutRef.current) {
        reconnectingTimeoutRef.current = window.setTimeout(() => {
          setDisconnected(true);
          retry(client.healthEndpoint, () => {
            resetClient();
            setDisconnected(false);
          });
        }, 5000);
      }
    });

    client.subscription.onReconnected(() => {
      clearTimeout(reconnectingTimeoutRef.current);
      reconnectingTimeoutRef.current = undefined;
    });

    return () => {
      client.subscription.unsubscribeAll();
    };
  }, [client.subscription, client.healthEndpoint, resetClient, retry]);

  React.useEffect(() => {
    fetch(client.healthEndpoint)
      .then(() => {})
      .catch(() => {
        setDisconnected(true);
        retry(client.healthEndpoint, () => {
          resetClient();
          setDisconnected(false);
        });
      });
  }, [client.healthEndpoint, resetClient, retry]);

  return (
    <AppContext.Provider value={{ client, resetClient, disconnected, serviceWorker }}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client.apollo}>
          <SnackbarProvider
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            classes={{ containerAnchorOriginTopRight: classes.snackBarTopRightContainer }}
          >
            <AppRouter />
          </SnackbarProvider>
        </ApolloProvider>
        <CssBaseline />
      </ThemeProvider>
    </AppContext.Provider>
  );
};
