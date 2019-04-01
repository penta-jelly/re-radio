import React from 'react';
import { Typography, Card } from '@material-ui/core';
import { useStyles } from './styles';

export const Playlist: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <Typography variant="subtitle1">Playlist</Typography>
    </Card>
  );
};
