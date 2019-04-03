import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
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
