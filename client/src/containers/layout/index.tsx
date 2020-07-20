import { Drawer, Icon, List, ListItem, ListItemIcon, ListItemText, Modal, Slide } from '@material-ui/core';
import React from 'react';
import { MdFingerprint as LoginIcon, MdRadio as StationIcon } from 'react-icons/md';
import { FaGithub as GithubIcon } from 'react-icons/fa';
import { Link, Route, useHistory, useRouteMatch } from 'react-router-dom';
import { Image } from 'components/image';
import { AppContext } from 'containers/app';
import { AuthenticatedListItem } from 'containers/layout/authenticated-list-item';
import { LoginForm } from 'modules/user/authentication/login-form';
import { useCurrentUserQuery } from 'operations';
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

export const Layout: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const sidebar = React.useMemo<DrawerProps>(() => props.drawer || defaultProps.drawer, [props.drawer]);
  const currentUserQuery = useCurrentUserQuery();

  const match = useRouteMatch();
  if (!match) {
    throw new Error(`Match not found. The "$stationSlug" is not existed in query param.`);
  }

  const history = useHistory();
  const appContext = React.useContext(AppContext);

  const openLoginModal = React.useCallback(() => {
    history.push(`${match.url}/login`);
  }, [match, history]);

  const closeLoginModal = React.useCallback(() => {
    history.push(`${match.url}`);
  }, [match, history]);

  const postLogin = React.useCallback(() => {
    closeLoginModal();
    appContext.resetClient();
  }, [appContext, closeLoginModal]);

  const loginFormComponent = React.useCallback(
    () => (
      <Modal open onClose={closeLoginModal} id="login-modal">
        <Slide in direction="left">
          <div className={classes.modal}>
            <LoginForm postLogin={postLogin} />
          </div>
        </Slide>
      </Modal>
    ),
    [classes.modal, closeLoginModal, postLogin],
  );

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
          <ListItem
            button
            component="a"
            href={process.env.REACT_APP_GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <>
              <ListItemIcon className={classes.listItemIcon}>
                <Icon>
                  <GithubIcon />
                </Icon>
              </ListItemIcon>
              {sidebar.collapsed || <ListItemText primary="Github" />}
            </>
          </ListItem>
          {currentUserQuery.error && (
            <ListItem button onClick={openLoginModal}>
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
        {currentUserQuery.error && <Route path={`${match ? match.url : ''}/login`} component={loginFormComponent} />}
      </Drawer>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
