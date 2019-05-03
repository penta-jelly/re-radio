import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import React from 'react';
import { useStyles } from './styles';

export const PrimaryButton: React.FunctionComponent<ButtonProps> = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <MuiButton className={classes.button} variant="contained" size="small" {...rest}>
      {children}
    </MuiButton>
  );
};
