import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }: Theme) => ({
  downShiftContentContainer: {
    position: 'relative',
    height: '100%',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  researchContainer: {
    width: `calc(100% - 56px)`,
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
