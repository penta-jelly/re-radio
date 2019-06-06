import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    height: '100%',
    display: 'flex',
  },
  cardContent: {
    margin: 'auto',
  },
  cardMedia: {
    height: 200,
  },
  button: {
    margin: spacing(2, 0, 1, 0),
  },
  buttonIcon: {
    margin: spacing(0, 1),
  },
  toggleText: {
    margin: spacing(1, 0),
    cursor: 'pointer',
  },
}));
