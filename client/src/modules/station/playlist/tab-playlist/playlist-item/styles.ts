import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: 5,
    display: 'flex',
    height: theme.typography.fontSize * 1.5 * 4,
    border: '2px solid hsl(210, 23%, 95%)',
    boxShadow: '0 1px 2px rgba(0,0,0,.2)',
  },
  cover: {
    backgroundColor: 'cover',
    width: theme.typography.fontSize * 1.5 * 6,
    height: '100%',
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(12),
    color: 'hsl(202, 57%, 15%)',
    width: theme.typography.fontSize * 1.5 * 13.5,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  smallText: {
    fontWeight: 400,
    fontSize: theme.typography.pxToRem(8),
    color: 'hsl(203, 15%, 47%)',
  },
  button: {
    margin: 1,
    width: theme.typography.fontSize * 1.5,
    height: theme.typography.fontSize * 1.5,
  },
  icon: {
    width: (theme.typography.fontSize * 1.5) / 2,
    height: (theme.typography.fontSize * 1.5) / 2,
  },
  mainActions: {
    padding: 8,
    justifyContent: 'space-between',
  },
  heading: {
    paddingTop: 7.5,
    paddingBottom: 0,
  },
  leftActions: { padding: 0 },
  rightActions: { padding: 0 },
}));
