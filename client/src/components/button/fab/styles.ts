import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  container: {
    position: 'fixed',
    right: spacing(2),
    bottom: spacing(2),
  },
}));
