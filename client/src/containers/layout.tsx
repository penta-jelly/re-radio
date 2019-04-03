import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import logoImage from '../assets/logo.png';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '240px 1fr',
  },
  sidebar: {
    width: drawerWidth,
  },
  sidebarPaper: {
    width: drawerWidth,
    backgroundColor: '#f3f3f3',
    borderRight: 'none',
  },
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
    padding: 10,
    backgroundColor: '#f85b5c',
    color: '#fff',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: 40,
    verticalAlign: 'middle',
    marginRight: 20,
  },
}));

interface Props {
  hasSidebar?: boolean;
}

export const Layout: React.FC<Props> & { defaultProps: typeof defaultProps } = ({ children, hasSidebar }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer variant="permanent" className={classes.sidebar} classes={{ paper: classes.sidebarPaper }}>
        <List className={classes.sidebarContent}>
          <li className={classes.title}>
            <img className={classes.logo} src={logoImage} alt="Logo" />
            re-Radio
          </li>
          <ListItem button>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Stations" />
          </ListItem>
          <div className={classes.spacer} />
          <ListItem button>
            <ListItemText primary="Sign In / Sign Out" />
          </ListItem>
        </List>
      </Drawer>
      <div>{children}</div>
    </div>
  );
};

const defaultProps = {
  hasSidebar: true,
};

Layout.defaultProps = defaultProps;
