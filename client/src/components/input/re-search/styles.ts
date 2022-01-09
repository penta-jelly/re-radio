import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    border: `2px solid rgba(0, 0, 0, 0.4)`,
    borderRadius: '100px',
    padding: theme.spacing(0.5, 1.5),
    transition: 'border-color 0.4s ease-in-out',
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
  },
  rootFocused: {
    borderColor: theme.palette.primary.main,
    '& #close-button, & #search-button': {
      color: theme.palette.primary.main,
    },
  },
  fullWidth: {
    width: '100%',
  },
  icon: {
    fontSize: '1.50rem',
    color: theme.palette.grey['600'],
  },
}));
