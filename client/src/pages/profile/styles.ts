import { makeStyles } from '@material-ui/core';
import { COLLAPSED_DRAWER_WIDTH } from 'containers/layout/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width: `calc(100vw - ${COLLAPSED_DRAWER_WIDTH}px)`,
    height: '100%',
  },
}));
