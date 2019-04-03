import React from 'react';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';

interface Props {
  icon?: React.ReactNode;
  text: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLSpanElement>): void;
}

export const ReCardLink: React.FC<Props> = ({ icon, text, onClick }) => {
  const classes = useStyles();

  return (
    <span className={classes.link} onClick={onClick || undefined}>
      {icon}
      <Typography className={classes.text}>{text}</Typography>
    </span>
  );
};
