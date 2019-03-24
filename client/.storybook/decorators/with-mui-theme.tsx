import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { StoryDecorator } from '@storybook/react';

import { theme } from '../../src/lib/@material-ui/theme';

export const withMuiTheme: StoryDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
