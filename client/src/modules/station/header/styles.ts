import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette }) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
  },
}));
