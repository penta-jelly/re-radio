import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  form: {
    width: 300,
    padding: spacing(2),
    paddingTop: '10vh',
    height: '100vh',
    background: '#f2f2f2',
  },
  button: {
    width: '100%',
    margin: spacing(3, 0, 2, 0),
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  facebookIcon: {
    margin: spacing(2),
    background: '#4267b2',
  },
  googleIcon: {
    margin: spacing(2),
    background: '#d34836',
  },
}));
