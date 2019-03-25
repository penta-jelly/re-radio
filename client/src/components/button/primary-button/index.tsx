import React from 'react';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';

import { usePrimaryButtonStyles } from './primary-button.styles';

export const PrimaryButton: React.FunctionComponent<ButtonProps> = ({ children, ...rest }) => {
  const classes = usePrimaryButtonStyles();

  return (
    <MuiButton className={classes.button} variant="contained" size="small" {...rest}>
      {children}
    </MuiButton>
  );
};
