import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: theme.palette.primary.main,
  },
  tabItem: {
    fontSize: theme.typography.pxToRem(theme.typography.fontSize / 1.3),
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    minWidth: 100,
    textTransform: 'initial',
    '&:hover': {
      color: theme.palette.primary.main,
      opacity: 1,
    },
    '&$tabSelected': {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: theme.palette.primary.main,
    },
  },
}));
