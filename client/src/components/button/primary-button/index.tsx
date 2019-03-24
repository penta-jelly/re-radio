import React from 'react';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#f85b5c',
    },
  },
}));

export const PrimaryButton: React.FunctionComponent<ButtonProps> = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <MuiButton className={classes.button} variant="contained" size="small" {...rest}>
      {children}
    </MuiButton>
  );
};
