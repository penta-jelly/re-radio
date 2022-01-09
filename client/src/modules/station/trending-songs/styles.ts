import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  list: {
    flex: 1,
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
  preferredRegionContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: spacing(1, 2),
  },
}));
