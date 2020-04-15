import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette, breakpoints, zIndex, spacing }) => ({
  container: {
    height: '100%',
  },
  header: {
    height: 48,
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
  },
  content: {
    height: 'calc(100vh - 48px)',
  },
  songsList: {
    paddingRight: 0,
  },
  subContent: {
    height: '100%',
  },
  fabIcon: {
    '& svg': {
      width: 24,
      height: 24,
    },
  },
  addSongContainer: {
    position: 'fixed',
    right: 96,
    bottom: 16,
    width: 600,
    height: 300,
    zIndex: zIndex.modal,
    [breakpoints.down('xs')]: {
      bottom: 96,
      right: 'auto',
      left: 72,
      width: 'calc(100% - 96px)',
      height: 300,
    },
  },
}));
