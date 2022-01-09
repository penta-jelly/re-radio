import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }: Theme) => ({
  card: {
    height: '100%',
    padding: spacing(2),
  },
  container: {
    height: '100%',
  },
  wrapper: {
    height: '100%',
  },
}));
