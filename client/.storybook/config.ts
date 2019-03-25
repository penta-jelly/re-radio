import { configure, addDecorator } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';
import { withMuiTheme } from './decorators/with-mui-theme';

addDecorator(withInfo());
addDecorator(withMuiTheme);

function loadStories() {
  // automatically import all story js files that end with *.stories.tsx
  const req = require.context('../src', true, /\.stories\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
