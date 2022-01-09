import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: '0.625rem 2.5rem',
    position: 'relative',
    height: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  stationsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))',
    gridAutoFlow: 'row',
    gridGap: '1.25rem',
  },
  section: {
    marginTop: '2.5rem',
  },
  sectionTitle: {
    fontWeight: 700,
  },
  iconButton: {
    margin: spacing(0, 1),
  },
  modal: {
    position: 'absolute',
    width: 320,
    height: '100%',
    right: 0,
    top: 0,
  },
}));
