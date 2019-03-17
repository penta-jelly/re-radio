import React from 'react';
import { mount, route } from 'navi';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export const Home = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Hello from home page</Button>;
};

export default mount({
  '/': route({
    async getView(_request) {
      return <Home />;
    },
  }),
});
