import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { MdFingerprint as LoginIcon, MdRadio as StationIcon } from 'react-icons/md';
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from 'assets/logo.png';
import { Image } from 'components/image';
import { useStyles } from './styles';

export interface Props {
  drawer?: DrawerProps;
}

export interface DrawerProps {
  open: boolean;
  collapsed: boolean;
}

const defaultProps = {
  drawer: { open: true, collapsed: false },
};

export const Layout: React.FC<Props> = props => {
  const classes = useStyles(props);
  const sidebar = React.useMemo<DrawerProps>(() => props.drawer || defaultProps.drawer, [props.drawer]);
  return (
    <div className={classes.root}>
      <Drawer
        variant="persistent"
        className={classes.sidebar}
        classes={{ paper: classes.sidebarPaper }}
        open={sidebar.open}
      >
        <List className={classes.sidebarContent}>
          <li className={classes.title}>
            <Link to="/">
              <Image className={classes.logo} src={logoImage} alt="Logo" />
            </Link>
            {sidebar.collapsed || 'Re-radio'}
          </li>
          <ListItem button component={Link} to="/">
            <>
              <ListItemIcon>
                <StationIcon />
              </ListItemIcon>
              {sidebar.collapsed || <ListItemText primary="Stations" />}
            </>
          </ListItem>
          <div className={classes.spacer} />
          <ListItem button component={Link} to="/register">
            <>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              {sidebar.collapsed || <ListItemText primary="Sign In" />}
            </>
          </ListItem>
        </List>
      </Drawer>
      <div>{props.children}</div>
    </div>
  );
};

Layout.defaultProps = defaultProps;
