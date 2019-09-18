import { ListItem, ListItemAvatar, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { Image } from 'components/image';
import { CurrentUserQuery } from 'operations';
import React from 'react';
import { Link } from 'react-router-dom';
import { DrawerProps } from '.';
import { useStyles } from './styles';

export interface Props {
  user: CurrentUserQuery['user'];
  drawer: DrawerProps;
}

export const AuthenticatedListItem: React.FC<Props> = ({ user, drawer }) => {
  const classes = useStyles({ drawer });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const onContainerClicked = React.useCallback(event => {
    setAnchorEl(event.currentTarget);
  }, []);

  const logout = React.useCallback(event => {
    setAnchorEl(null);
    localStorage.removeItem('token');
    // TODO: a better solution is to reset Apollo storage
    window.location.reload();
  }, []);

  const onClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <ListItem>
      <>
        <ListItemAvatar className={classes.listItemIcon}>
          <Image className={classes.avatar} src={user.avatarUrl} onClick={onContainerClicked} />
        </ListItemAvatar>
        {drawer.collapsed || <ListItemText primary={user.username} />}
        <Menu id="lock-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
          <MenuItem component={Link} to={`/profile/${user.username}`} button>
            Profile
          </MenuItem>
          <MenuItem onClick={logout} button>
            Logout
          </MenuItem>
        </Menu>
      </>
    </ListItem>
  );
};
