import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const PageLoader: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress size={60} />
    </div>
  );
};
