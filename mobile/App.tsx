import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import { AppClient, initClient } from './src/apollo/client';
import Navigation from './src/navigation';

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
        {/* @ts-ignore */}
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
