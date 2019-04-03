import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  container: () => ({
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
