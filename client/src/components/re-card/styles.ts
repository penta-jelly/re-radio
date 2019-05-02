import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 'auto',
    height: 'auto',
    borderRadius: 15,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  },
  imageContainer: {
    position: 'relative',
  },
  image: { margin: 'auto', width: '100%', height: '100%' },
  iconButton: {
    backgroundColor: '#fff',
    border: 'none',
    position: 'absolute',
    right: 10,
    top: 10,
    borderRadius: '50%',
    padding: 12,
    cursor: 'pointer',
    outline: 'none',
    '& > svg': {
      fontSize: '1rem',
    },
  },
  contentContainer: {
    padding: '10px !important',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  content: {
    fontSize: '1rem',
    color: '#000',
    opacity: 0.6,
    marginBottom: 8,
  },
  divider: {
    display: 'block',
    height: 2,
    width: '100%',
    backgroundColor: theme.palette.secondary.dark,
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 8,
  },
}));
