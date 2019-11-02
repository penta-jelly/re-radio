import { Fab as MuiFab, Portal } from '@material-ui/core';
import { FabProps as MuiFabProps } from '@material-ui/core/Fab';
import * as React from 'react';
import { useStyles } from './styles';

interface FabProps {
  muiProps?: MuiFabProps;
}

export const Fab: React.FC<FabProps> = props => {
  const classes = useStyles();

  return (
    <Portal>
      <div className={classes.container}>
        <MuiFab {...props.muiProps}>{props.children}</MuiFab>
      </div>
    </Portal>
  );
};
