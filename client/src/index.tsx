// eslint-disable-next-line import/no-unassigned-import
import 'moment-duration-format';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from 'store';
import { App } from './containers/app';

const render = (component: React.ReactElement) => {
  return ReactDOM.render(component, document.getElementById('root'));
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
);
