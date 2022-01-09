import { Button, CircularProgress, createGenerateClassName, StylesProvider, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider, useSnackbar } from 'notistack';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { theme } from 'lib/@material-ui/theme';
import { AppClient, initClient } from 'lib/apollo/init';
import { initI18n } from 'lib/react-i18next';
import { ServiceWorkerProvider, useServiceWorker } from 'lib/service-worker';
import { AppRouter } from './router';
import { useStyles } from './styles';

initI18n();
const initialClient = initClient();

interface Props {}

interface IAppContext {
  client: AppClient;
  resetClient(): void;
}

export const AppContext = React.createContext<IAppContext>({
  client: initialClient,
  resetClient() {},
});

export const App: React.FC<Props> = () => {
  const classes = useStyles();
  const [client, setClient] = React.useState(initialClient);

  const resetClient = React.useCallback(() => {
    setClient((client) => {
      client.subscription.close(true);
      client.apollo.stop();
      return initClient();
    });
  }, []);

  const generateClassName = React.useMemo(() => {
    return createGenerateClassName({ disableGlobal: true, productionPrefix: 'radio-jss-' });
  }, []);

  return (
    <ServiceWorkerProvider>
      <AppContext.Provider value={{ client, resetClient }}>
        <StylesProvider injectFirst={false} generateClassName={generateClassName}>
          <ThemeProvider theme={theme}>
            <ApolloProvider client={client.apollo}>
              <SnackbarProvider
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                classes={{ containerAnchorOriginTopRight: classes.snackBarTopRightContainer }}
              >
                <AppHOC>
                  <AppRouter />
                </AppHOC>
              </SnackbarProvider>
            </ApolloProvider>
            <CssBaseline />
          </ThemeProvider>
        </StylesProvider>
      </AppContext.Provider>
    </ServiceWorkerProvider>
  );
};

const AppHOC: React.FC = (props) => {
  const appContext = React.useContext(AppContext);
  const serviceWorker = useServiceWorker();
  const [disconnected, setDisconnected] = React.useState(false);

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
    appContext.client.subscription.onDisconnected(() => {
      if (!reconnectingTimeoutRef.current) {
        reconnectingTimeoutRef.current = window.setTimeout(() => {
          setDisconnected(true);
          retry(appContext.client.healthEndpoint, () => {
            appContext.resetClient();
            setDisconnected(false);
            serviceWorker.updateContent();
          });
        }, 5000);
      }
    });

    appContext.client.subscription.onReconnected(() => {
      clearTimeout(reconnectingTimeoutRef.current);
      reconnectingTimeoutRef.current = undefined;
    });

    return () => {
      appContext.client.subscription.unsubscribeAll();
    };
  }, [retry, appContext, serviceWorker]);

  React.useEffect(() => {
    fetch(appContext.client.healthEndpoint)
      .then(() => {})
      .catch(() => {
        setDisconnected(true);
        retry(appContext.client.healthEndpoint, () => {
          appContext.resetClient();
          setDisconnected(false);
          serviceWorker.updateContent();
        });
      });
  }, [appContext, appContext.client.healthEndpoint, retry, serviceWorker]);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const suspendedSnackbarId = 'SuspendedSnackbar';
  React.useEffect(() => {
    if (disconnected === true) {
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
  }, [disconnected, closeSnackbar, enqueueSnackbar]);

  React.useEffect(() => {
    const id = serviceWorker.onUpdate(() => {
      enqueueSnackbar(
        <>
          A new version of your app is ready. Reload to apply.
          <Button color="inherit" size="small" style={{ marginLeft: 8 }} onClick={serviceWorker.applyNewContent}>
            Reload now
          </Button>
        </>,
        { persist: true, anchorOrigin: { vertical: 'bottom', horizontal: 'left' } },
      );
    });
    return () => {
      serviceWorker.offUpdate(id);
    };
  }, [serviceWorker, enqueueSnackbar]);

  return <>{props.children}</>;
};
