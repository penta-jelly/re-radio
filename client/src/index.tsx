import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './containers/app';

import * as ServiceWorker from './serviceWorker';

const render = (component: React.ReactElement) => {
  return ReactDOM.render(component, document.getElementById('root'));
};

export const eventRegistry: { onSuccess: { [id: number]: Function }; onUpdate: { [id: number]: Function } } = {
  onSuccess: {},
  onUpdate: {},
};

export interface ServiceWorkerContext {
  onSuccess(callback: Function): number;
  offSuccess(id: number): void;
  onUpdate(callback: Function): number;
  offUpdate(id: number): void;
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
};

render(<App serviceWorker={serviceWorker} />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
ServiceWorker.register({
  onSuccess() {
    Object.keys(eventRegistry.onSuccess).forEach((key: string) => {
      eventRegistry.onSuccess[parseInt(key)]();
    });
  },
  onUpdate() {
    Object.keys(eventRegistry.onSuccess).forEach((key: string) => {
      eventRegistry.onUpdate[parseInt(key)]();
    });
  },
});

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    const UpdatedApp = require('./containers/app').App;
    render(<UpdatedApp serviceWorker={serviceWorker} />);
  });
}
