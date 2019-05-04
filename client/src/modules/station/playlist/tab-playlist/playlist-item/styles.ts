import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    marginBottom: 5,
    display: 'flex',
    border: '2px solid hsl(210, 23%, 95%)',
    boxShadow: '0 1px 2px rgba(0,0,0,.2)',
  },
  cover: {
    width: 'auto',
    height: theme.typography.fontSize * 1.5 * 3.5,
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  },
  title: {
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(12),
    color: 'hsl(202, 57%, 15%)',
    width: theme.typography.fontSize * 1.5 * 5.75,
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
    padding: 6,
    width: theme.typography.fontSize * 1.5,
  },
  icon: {
    width: (theme.typography.fontSize * 1.5) / 2,
    height: (theme.typography.fontSize * 1.5) / 2,
  },
  mainActions: {
    padding: 8,
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: 'space-between',
  },
  heading: {
    paddingTop: 7.5,
    paddingBottom: 0,
  },
  leftActions: { padding: 0, alignItems: 'center' },
  rightActions: { padding: 0 },
}));
