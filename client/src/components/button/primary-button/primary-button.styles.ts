import { makeStyles } from '@material-ui/core';

export const usePrimaryButtonStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#f85b5c',
    },
  },
}));
