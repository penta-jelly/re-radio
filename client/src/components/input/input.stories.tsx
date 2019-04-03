import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ReSearch } from './re-search';

storiesOf('Input', module).add('ReSearch', () => <ReSearch placeholder="Search" />);
