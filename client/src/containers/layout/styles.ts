import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { Props } from '.';

const drawerWidth = 200;
const collapsedDrawerWith = 56;

function getDrawerWidth(props: Props): number {
  if (!props.drawer) return drawerWidth;
  if (!props.drawer.open) return 0;
  if (props.drawer.collapsed) return collapsedDrawerWith;
  return drawerWidth;
}

export const useStyles = makeStyles(({ palette, typography, spacing }: Theme) => ({
  root: (props: Props) => ({
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: `${getDrawerWidth(props)}px 1fr`,
  }),
  sidebar: (props: Props) => ({
    width: getDrawerWidth(props),
  }),
  sidebarPaper: (props: Props) => ({
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
  content: props => ({
    width: `calc(100vw - ${getDrawerWidth(props)}px)`,
  }),
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
  logo: (props: Props) => ({
    display: 'block',
    width: 40,
    verticalAlign: 'middle',
    marginRight: props.drawer && props.drawer.collapsed ? 0 : 28,
  }),
}));
