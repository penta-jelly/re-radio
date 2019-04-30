import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& > svg': {
      fontSize: '1.125rem',
      marginRight: 6,
    },
    '&:hover > $text': {
      opacity: 1,
    },
  },
  text: {
    color: '#000',
    fontSize: '1rem',
    opacity: 0.6,
    transition: 'opacity 0.25s ease-in-out',
  },
}));
