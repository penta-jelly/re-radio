import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const TabHistory: React.FC<{}> = props => {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.typography}>
      {props.children}
    </Typography>
  );
};
