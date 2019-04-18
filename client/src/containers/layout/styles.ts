import { makeStyles, Theme } from '@material-ui/core';
import { Styles } from '@material-ui/styles/withStyles';
import { Props } from '.';

const drawerWidth = 200;
const collapsedDrawerWith = 56;

function getDrawerWidth(props: Props): number {
  // tslint:disable curly
  if (!props.drawer) return drawerWidth;
  if (!props.drawer.open) return 0;
  if (props.drawer.collapsed) return collapsedDrawerWith;
  // tslint:enable curly
  return drawerWidth;
}

export const useStyles = makeStyles<Styles<Theme, Props>>(({ palette, typography, spacing }: Theme) => ({
  root: props => ({
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: `${getDrawerWidth(props)}px 1fr`,
  }),
  sidebar: props => ({
    width: getDrawerWidth(props),
  }),
  sidebarPaper: props => ({
    width: getDrawerWidth(props),
    backgroundColor: '#f3f3f3',
    borderRight: 'none',
  }),
  sidebarContent: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  spacer: {
    flex: 1,
  },
  title: {
    height: '4rem',
    padding: spacing(1),
    backgroundColor: palette.primary.main,
    color: palette.common.white,
    fontSize: typography.subtitle1.fontSize,
    display: 'flex',
    alignItems: 'center',
  },
  logo: props => ({
    display: 'block',
    width: 40,
    verticalAlign: 'middle',
    marginRight: props.drawer && props.drawer.collapsed ? 0 : 28,
  }),
}));
