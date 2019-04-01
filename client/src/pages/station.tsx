import React from 'react';
import { StationLayout } from '../modules';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    width: `calc(100% - ${spacing(2)}px)`,
    height: `calc(100% - ${spacing(2)}px)`,
    margin: spacing(1),
  },
}));

const Station: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <StationLayout />
    </div>
  );
};

export default Station;
