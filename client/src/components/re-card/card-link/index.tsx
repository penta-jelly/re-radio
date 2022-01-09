import { Icon, PropTypes, Typography } from '@material-ui/core';
import React from 'react';

import { useStyles } from './styles';

interface Props {
  Icon?: React.ElementType;
  iconColor?: PropTypes.Color;
  text: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLSpanElement>): void;
}

export const ReCardLink: React.FC<Props> = ({ Icon: SvgIcon, iconColor, text, onClick }) => {
  const classes = useStyles();

  return (
    <span className={classes.link} onClick={onClick || undefined}>
      {SvgIcon && (
        <Icon color={iconColor} className={classes.icon}>
          <SvgIcon />
        </Icon>
      )}
      <Typography className={classes.text}>{text}</Typography>
    </span>
  );
};
