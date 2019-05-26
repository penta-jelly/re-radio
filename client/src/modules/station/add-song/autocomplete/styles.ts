import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }: Theme) => ({
  downShiftContentContainer: {
    position: 'relative',
    height: '100%',
  },
  researchContainer: {
    width: '100%',
  },
  paper: {
    height: 200,
    overflowY: 'auto',
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
  },
  thumbnailContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  thumbnail: {
    width: '100%',
    height: spacing(4),
    objectFit: 'contain',
  },
  menuItemRight: {
    display: 'flex',
    alignItems: 'center',
    padding: spacing(1),
  },
}));
