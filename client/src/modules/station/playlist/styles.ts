import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    height: '100%',
    width: '100%',
    overflowY: 'auto',
  },
}));
