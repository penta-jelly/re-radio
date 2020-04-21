// eslint-disable-next-line import/no-unassigned-import
import 'moment-duration-format';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './containers/app';

const render = (component: React.ReactElement) => {
  return ReactDOM.render(component, document.getElementById('root'));
};

render(<App />);

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    const UpdatedApp = require('./containers/app').App;

    render(<UpdatedApp />);
  });
}
