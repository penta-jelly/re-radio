import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Props } from '.';

export const DRAWER_WIDTH = 200;
export const COLLAPSED_DRAWER_WIDTH = 56;

function getDrawerWidth(props: Props): number {
  if (!props.drawer) return DRAWER_WIDTH;
  if (!props.drawer.open) return 0;
  if (props.drawer.collapsed) return COLLAPSED_DRAWER_WIDTH;
  return DRAWER_WIDTH;
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
  content: {},
  spacer: {
    flex: 1,
  },
  title: {
    height: 48,
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
    marginRight: props.drawer?.collapsed ? 0 : 28,
  }),
  listItemIcon: (props: Props) => ({
    minWidth: props.drawer?.collapsed ? 0 : undefined,
  }),
  avatar: (props: Props) => ({
    cursor: 'pointer',
    width: props.drawer?.collapsed ? 28 : 40,
    height: props.drawer?.collapsed ? 28 : 40,
    borderRadius: '50%',
    display: 'block',
  }),
  modal: {
    position: 'absolute',
    width: 300,
    height: '100%',
    right: 0,
    top: 0,
  },
}));
