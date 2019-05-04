import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.typography.fontSize / 1.5,
    height: '100%',
    overflowY: 'scroll',
  },
}));
