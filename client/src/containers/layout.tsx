import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
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
  logo: {
    height: '4rem',
    backgroundColor: '#f85b5c',
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
          <ListItem className={classes.logo} />
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
