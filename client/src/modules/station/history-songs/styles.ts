import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
  },
  listLoadingItemContainer: {
    width: '100%',
    padding: spacing(1),
    display: 'flex',
  },
  listLoadingItemContent: {
    margin: 'auto',
  },
}));
