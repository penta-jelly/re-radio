import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ zIndex }) => ({
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
    zIndex: zIndex.modal,
  }),
}));
