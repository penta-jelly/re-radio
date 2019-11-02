import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    backgroundImage: 'url("/asset/image/auth-background.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    flexDirection: 'row-reverse',
  },
  form: {
    width: theme.spacing(53.3),
    padding: theme.spacing(8),
    height: '100vh',
    background: '#f2f2f2',
  },
  button: {
    width: '100%',
    margin: theme.spacing(3, 0, 2, 0),
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  facebookIcon: {
    margin: theme.spacing(2),
    background: '#4267b2',
  },
  googleIcon: {
    margin: theme.spacing(2),
    background: '#d34836',
  },
}));
