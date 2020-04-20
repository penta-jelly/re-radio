import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  img: {
    margin: 'auto',
    maxHeight: 200,
    display: 'block',
  },
}));

export const NotFoundError: React.FC = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img height="100%" className={classes.img} src={require('./not_found.png')} alt="Not found" />
    </div>
  );
};
