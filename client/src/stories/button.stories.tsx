import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { PrimaryButton } from '../components/button/primary-button';

storiesOf('Button', module).add('Primary', () => (
  <PrimaryButton onClick={action('button clicked')}>Hello World</PrimaryButton>
));
