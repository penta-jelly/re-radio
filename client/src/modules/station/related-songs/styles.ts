import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  container: {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 650,
  },
  list: {
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
