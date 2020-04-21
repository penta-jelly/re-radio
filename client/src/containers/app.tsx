import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider, useSnackbar } from 'notistack';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Button, CircularProgress, StylesProvider, createGenerateClassName } from '@material-ui/core';
import { theme } from 'lib/@material-ui/theme';
import { AppClient, initClient } from 'lib/apollo/init';
import { initI18n } from 'lib/react-i18next';
import { ServiceWorkerContext, getServiceWorkerContextInstance } from 'service-worker';
import { AppRouter } from './router';
import { useStyles } from './styles';

initI18n();
const initialClient = initClient();

interface Props {}

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
  serviceWorker: getServiceWorkerContextInstance(),
});

export const App: React.FC<Props> = () => {
  const classes = useStyles();
  const [client, setClient] = React.useState(initialClient);
  const [disconnected, setDisconnected] = React.useState(false);

  const serviceWorker = React.useMemo(getServiceWorkerContextInstance, []);

  const resetClient = React.useCallback(() => {
    setClient((client) => {
      client.subscription.close(true);
      client.apollo.stop();
      return initClient();
    });
  }, []);

  const retry = React.useCallback(async (endpoint: string, success: () => void, error?: () => void) => {
    const ping = () => fetch(endpoint);
    const postpone = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));
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

  const generateClassName = React.useMemo(() => {
    return createGenerateClassName({ disableGlobal: true, productionPrefix: 'radio-' });
  }, []);

  return (
    <AppContext.Provider value={{ client, resetClient, disconnected, serviceWorker }}>
      <StylesProvider injectFirst={false} generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client.apollo}>
            <SnackbarProvider
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              classes={{ containerAnchorOriginTopRight: classes.snackBarTopRightContainer }}
            >
              <Main />
            </SnackbarProvider>
          </ApolloProvider>
          <CssBaseline />
        </ThemeProvider>
      </StylesProvider>
    </AppContext.Provider>
  );
};

const Main = () => {
  const appContext = React.useContext(AppContext);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const suspendedSnackbarId = 'SuspendedSnackbar';
  React.useEffect(() => {
    if (appContext.disconnected === true) {
      enqueueSnackbar(
        <>
          <CircularProgress size={16} color="inherit" style={{ marginRight: 8 }} /> Cannot connect to the server.
          Reconnecting...
        </>,
        { key: suspendedSnackbarId, persist: true, anchorOrigin: { vertical: 'bottom', horizontal: 'left' } },
      );
      return () => {
        closeSnackbar(suspendedSnackbarId);
      };
    } else {
      closeSnackbar(suspendedSnackbarId);
    }
  }, [appContext.disconnected, closeSnackbar, enqueueSnackbar]);

  React.useEffect(() => {
    const id = appContext.serviceWorker.onUpdate(() => {
      enqueueSnackbar(
        <>
          A new version of your app is ready and will be used on your next browser's reloading.
          <Button
            // variant="outlined"
            color="inherit"
            size="small"
            style={{ marginLeft: 8 }}
            onClick={appContext.serviceWorker.reloadToApplyNewContent}
          >
            Reload now
          </Button>
        </>,
        { persist: true, anchorOrigin: { vertical: 'bottom', horizontal: 'left' } },
      );
    });
    return () => {
      appContext.serviceWorker.offUpdate(id);
    };
  }, [appContext.serviceWorker, enqueueSnackbar]);

  return <AppRouter />;
};
