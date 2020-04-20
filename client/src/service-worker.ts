// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
);

interface Config {
  onSuccess?: () => void;
  onUpdate?: () => void;
}

function register(config?: Config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL((process as { env: { [key: string]: string } }).env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit http://bit.ly/CRA-PWA',
          );
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl: string, config?: Config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.

              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See http://bit.ly/CRA-PWA.',
              );

              // Execute callback
              config?.onUpdate?.();
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.

              console.log('Content is cached for offline use.');

              // Execute callback
              config?.onSuccess?.();
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl: string, config?: Config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then((response) => {
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
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('No internet connection found. App is running in offline mode.');
    });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}

/**
 *
 */
const eventRegistry: { onSuccess: { [id: number]: Function }; onUpdate: { [id: number]: Function } } = {
  onSuccess: {},
  onUpdate: {},
};

export interface ServiceWorkerContext {
  onSuccess(callback: Function): number;
  offSuccess(id: number): void;
  onUpdate(callback: Function): number;
  offUpdate(id: number): void;
  unregister(): void;
}

export function getServiceWorkerContextInstance() {
  return serviceWorker;
}

let id = 0;
const serviceWorker: ServiceWorkerContext = {
  onSuccess(callback) {
    const usedId = id;
    eventRegistry['onSuccess'][usedId] = callback;
    id++;
    return usedId;
  },
  offSuccess(id) {
    delete eventRegistry['onSuccess'][id];
  },
  onUpdate(callback) {
    const usedId = id;
    eventRegistry['onUpdate'][usedId] = callback;
    id++;
    return usedId;
  },
  offUpdate(id) {
    delete eventRegistry['onUpdate'][id];
  },
  unregister,
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
register({
  onSuccess() {
    Object.keys(eventRegistry.onSuccess).forEach((key: string) => {
      eventRegistry.onSuccess[parseInt(key)]();
    });
  },
  onUpdate() {
    Object.keys(eventRegistry.onUpdate).forEach((key: string) => {
      eventRegistry.onUpdate[parseInt(key)]();
    });
    // Force reload if there is no listener.
    // Usually this only happens when your UI is not fully loaded yet.
    if (Object.keys(eventRegistry.onUpdate).length === 0) {
      window.location.reload(true);
    }
  },
});
