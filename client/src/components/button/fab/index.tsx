import { Fab as MuiFab, Portal } from '@material-ui/core';
import * as React from 'react';
import { useStyles } from './styles';

interface FabProps {
  muiProps?: Omit<React.ComponentProps<typeof MuiFab>, 'children'>;
}

export const Fab: React.FC<FabProps> = (props) => {
  const classes = useStyles();

  return (
    <Portal>
      <div className={classes.container}>
        <MuiFab {...props.muiProps}>
          <>{props.children}</>
        </MuiFab>
      </div>
    </Portal>
  );
};
