import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typography: {
    padding: theme.spacing(3),
  },
}));
