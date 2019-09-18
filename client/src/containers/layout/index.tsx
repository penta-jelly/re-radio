import { Drawer, Icon, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Image } from 'components/image';
import { PageLoader } from 'components/page-loader';
import { AuthenticatedListItem } from 'containers/layout/authenticated-list-item';
import { useCurrentUserQuery } from 'operations';
import React from 'react';
import { MdFingerprint as LoginIcon, MdRadio as StationIcon } from 'react-icons/md';
import { Link } from 'react-router-dom';
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
  const currentUserQuery = useCurrentUserQuery();
  if (currentUserQuery.loading) {
    return <PageLoader />;
  }
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
              <Image className={classes.logo} src="/asset/logo.png" alt="Logo" />
            </Link>
            {sidebar.collapsed || 'Re-radio'}
          </li>
          <ListItem button component={Link} to="/">
            <>
              <ListItemIcon className={classes.listItemIcon}>
                <Icon>
                  <StationIcon />
                </Icon>
              </ListItemIcon>
              {sidebar.collapsed || <ListItemText primary="Stations" />}
            </>
          </ListItem>
          <div className={classes.spacer} />
          {currentUserQuery.error && (
            <ListItem button component={Link} to="/login">
              <>
                <ListItemIcon className={classes.listItemIcon}>
                  <Icon>
                    <LoginIcon />
                  </Icon>
                </ListItemIcon>
                {sidebar.collapsed || <ListItemText primary="Sign In" />}
              </>
            </ListItem>
          )}
          {currentUserQuery.data && <AuthenticatedListItem user={currentUserQuery.data.user} drawer={sidebar} />}
        </List>
      </Drawer>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

Layout.defaultProps = defaultProps;
