import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontSize: 16,
  },
  palette: {
    primary: {
      light: '#ff8f89',
      main: '#f85c5c',
      dark: '#bf2532',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#ccc',
    },
  },
});
