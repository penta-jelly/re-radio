import {
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Slide,
  CircularProgress,
  Button,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React from 'react';
import { MdFingerprint as LoginIcon, MdRadio as StationIcon } from 'react-icons/md';
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
    throw new Error(`Match not found. Do you $stationSlug is not existed in query param.`);
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

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const suspendedSnackbarId = 'SuspendedSnackbar';
  React.useEffect(() => {
    if (appContext.disconnected === true) {
      enqueueSnackbar(
        <>
          <CircularProgress size={16} color="inherit" style={{ marginRight: 8 }} /> Cannot connect to the server.
          Reconnecting...
        </>,
        { key: suspendedSnackbarId, persist: true, anchorOrigin: { vertical: 'bottom', horizontal: 'left' } },
      );
      return () => {
        closeSnackbar(suspendedSnackbarId);
      };
    } else {
      closeSnackbar(suspendedSnackbarId);
    }
  }, [appContext.disconnected, closeSnackbar, enqueueSnackbar]);

  React.useEffect(() => {
    const id = appContext.serviceWorker.onUpdate(() => {
      enqueueSnackbar(
        <>
          A new version of your app is available. Reload the page to apply.
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            style={{ marginLeft: 8 }}
            onClick={() => window.location.reload(true)}
          >
            Reload
          </Button>
        </>,
        { persist: true, anchorOrigin: { vertical: 'bottom', horizontal: 'left' } },
      );
    });
    return () => {
      appContext.serviceWorker.offUpdate(id);
    };
  }, [appContext.serviceWorker, enqueueSnackbar]);

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
