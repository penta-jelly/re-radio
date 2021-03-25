import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from 're-radio-common/lib/@apollo/client';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { AppClient, initClient } from './lib/apollo/client';
import Navigation from './navigation';

const initialClient = initClient();

interface IAppContext {
  client: AppClient;
  resetClient(): void;
}

export const AppContext = React.createContext<IAppContext>({
  client: initialClient,
  resetClient() {},
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [client, setClient] = React.useState(initialClient);

  const resetClient = React.useCallback(() => {
    setClient((client) => {
      client.subscription.close(true);
      client.apollo.stop();
      return initClient();
    });
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <AppContext.Provider value={{ client, resetClient }}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar style={colorScheme} />
          </AppContext.Provider>
        </ApolloProvider>
      </SafeAreaProvider>
    );
  }
}
