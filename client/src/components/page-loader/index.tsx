import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

export const PageLoader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress size={60} />
    </div>
  );
};
