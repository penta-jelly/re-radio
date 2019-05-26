import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {},
  header: {
    height: 64,
  },
  content: {
    height: 'calc(100vh - 64px)',
  },
  rightLayout: {
    padding: '0 8px !important',
  },
  rightContainer: {
    height: '100%',
    margin: '0 -8px',
  },
  playerContainer: {
    height: '60%',
  },
  addSongContainer: {
    height: '40%',
  },
}));
