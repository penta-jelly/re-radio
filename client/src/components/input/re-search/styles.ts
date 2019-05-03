import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    border: `2px solid rgba(0, 0, 0, 0.4)`,
    borderRadius: '100px',
    padding: '0.25rem 0.75rem',
    transition: 'border-color 0.4s ease-in-out',
    '&:hover': {
      borderColor: theme.palette.primary.main,
      '& > $icon': {
        color: theme.palette.primary.main,
      },
    },
  },
  rootFocused: {
    borderColor: theme.palette.primary.main,
    '& > $icon': {
      color: theme.palette.primary.main,
    },
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.4)',
    transition: 'color 0.4s ease-in-out',
  },
}));
