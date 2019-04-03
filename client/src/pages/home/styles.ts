import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
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
});
