import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  form: {
    width: 300,
    padding: spacing(2),
    paddingTop: '15vh',
    height: '100vh',
    background: palette.grey['50'],
  },
  button: {
    width: '100%',
    margin: spacing(3, 0, 2, 0),
  },
  forgotPassRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  githubIcon: {
    margin: spacing(2),
    background: '#24292E',
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
