import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(({ spacing }: Theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover $text': {
      opacity: 1,
    },
  },
  icon: {
    fontSize: '1.125rem',
    marginRight: spacing(0.5),
  },
  text: {
    color: '#000',
    fontSize: '1rem',
    opacity: 0.6,
    transition: 'opacity 0.25s ease-in-out',
  },
}));
