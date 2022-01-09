import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import React from 'react';
import { useStyles } from './styles';

export const PrimaryButton: React.FunctionComponent<ButtonProps> = ({ children, className, ...rest }) => {
  const classes = useStyles();

  return (
    <MuiButton
      className={[classes.button, className || undefined].join(' ')}
      variant="contained"
      size="small"
      {...rest}
    >
      {children}
    </MuiButton>
  );
};
