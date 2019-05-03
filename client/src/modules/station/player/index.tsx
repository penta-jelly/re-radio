import { Card, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

export const Player: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <Typography variant="subtitle1">Player</Typography>
    </Card>
  );
};
