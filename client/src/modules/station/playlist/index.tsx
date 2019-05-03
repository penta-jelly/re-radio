import { Card, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

export const Playlist: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <Typography variant="subtitle1">Playlist</Typography>
    </Card>
  );
};
