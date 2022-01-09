import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    paddingBottom: spacing(2),
  },
  list: {
    height: '100%',
    width: '100%',
    overflowY: 'auto',
  },
}));
