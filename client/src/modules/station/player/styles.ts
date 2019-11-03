import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    pointerEvents: 'none',
  },
}));
