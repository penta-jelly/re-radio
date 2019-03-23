import React, { Props } from 'react';
import ReactDOM from 'react-dom';

import { App } from './containers/app';

import * as serviceWorker from './serviceWorker';

const render = (Component: React.ComponentType) => {
  return ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    const NextApp = require('./containers/app').App;
    render(NextApp);
  });
}
