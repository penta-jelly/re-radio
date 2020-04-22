import React from 'react';

export interface ServiceWorkerContext {
  onSuccess(callback: Function): number;
  offSuccess(id: number): void;
  onUpdate(callback: Function): number;
  offUpdate(id: number): void;
  updateContent(): void;
  applyNewContent(): void;
}

interface EventRegistry {
  onSuccess: { [id: number]: Function };
  onUpdate: { [id: number]: Function };
}

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
);

const Context = React.createContext<ServiceWorkerContext>({
  onSuccess: () => -1,
  offSuccess: () => {},
  onUpdate: () => -1,
  offUpdate: () => -1,
  updateContent: () => {},
  applyNewContent: () => {},
});

export const ServiceWorkerProvider: React.FC = (props) => {
  const eventRegistryRef = React.useRef<EventRegistry>({ onSuccess: {}, onUpdate: {} });
  const idRef = React.useRef(0);
  const registrationRef = React.useRef<ServiceWorkerRegistration | null>();

  const context = React.useMemo<ServiceWorkerContext>(() => {
    return {
      onSuccess(callback) {
        const usedId = idRef.current;
        eventRegistryRef.current['onSuccess'][usedId] = callback;
        idRef.current++;
        return usedId;
      },
      offSuccess(id) {
        delete eventRegistryRef.current['onSuccess'][id];
      },
      onUpdate(callback) {
        const usedId = idRef.current;
        eventRegistryRef.current['onUpdate'][usedId] = callback;
        idRef.current++;
        return usedId;
      },
      offUpdate(id) {
        delete eventRegistryRef.current['onUpdate'][id];
      },
      updateContent() {
        registrationRef.current?.update();
      },
      applyNewContent() {
        registrationRef.current?.waiting?.postMessage({ type: 'SKIP_WAITING' });
      },
    };
  }, []);

  const registerValidSW = React.useCallback(async (swUrl: string) => {
    try {
      registrationRef.current = await navigator.serviceWorker.register(swUrl);
      registrationRef.current.onupdatefound = () => {
        const installingWorker = registrationRef.current?.installing;
        if (!installingWorker) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log('New content is available and will be used when all tabs for this page are closed.');
              Object.keys(eventRegistryRef.current.onUpdate).forEach((key: string) => {
                eventRegistryRef.current.onUpdate[parseInt(key)]();
              });
            } else {
              console.log('Content is cached for offline use.');
              Object.keys(eventRegistryRef.current.onSuccess).forEach((key: string) => {
                eventRegistryRef.current.onSuccess[parseInt(key)]();
              });
            }
          }

          // A technique to prevent infinite loop when reloading browser while the dev tool is opening
          let refreshing: boolean = false;
          navigator.serviceWorker.oncontrollerchange = () => {
            if (refreshing) return;
            refreshing = true;
            window.location.reload();
          };
        };
      };
    } catch (error) {
      console.error('Error during service worker registration:', error);
    }
  }, []);

  const checkValidServiceWorker = React.useCallback(
    async (swUrl: string) => {
      // Check if the service worker can be found. If it can't reload the page.
      try {
        const response = await fetch(swUrl);
        // Ensure service worker exists, and that we really are getting a JS file.
        const contentType = response.headers.get('content-type');
        if (response.status === 404 || (contentType != null && contentType.indexOf('javascript') === -1)) {
          // No service worker found. Probably a different app. Reload the page.
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Service worker found. Proceed as normal.
          registerValidSW(swUrl);
        }
      } catch (e) {
        console.log('No internet connection found. App is running in offline mode.');
      }
    },
    [registerValidSW],
  );

  const register = React.useCallback(
    (swUrl: string) => {
      if (isLocalhost) {
        checkValidServiceWorker(swUrl);
        navigator.serviceWorker.ready.then(() => {
          console.log('This web app is being served cache-first by a service worker.');
        });
      } else {
        registerValidSW(swUrl);
      }
    },
    [checkValidServiceWorker, registerValidSW],
  );

  const unregister = React.useCallback(() => {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }, []);

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      register(`service-worker.js`);
    }
  }, [register]);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && 'serviceWorker' in navigator) {
      unregister();
    }
  }, [unregister]);

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export const ServiceWorkerConsumer = Context.Consumer;
export function useServiceWorker() {
  return React.useContext(Context);
}
