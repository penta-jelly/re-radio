import React from 'react';
import { Card as MaterialCard, CardActionArea, CardMedia, Typography, CardContent } from '@material-ui/core';
import { CardActionAreaProps } from '@material-ui/core/CardActionArea';

import { useStyles } from './styles';

const CardActionAreaDiv = CardActionArea as React.ComponentType<
  CardActionAreaProps & { component?: React.ElementType }
>;

interface Props {
  media?: {
    alt?: string;
    image?: string;
  };
  title?: string;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  links?: React.ReactNode;
  className?: string;
  onIconButtonClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export const ReCard: React.FC<Props> = ({ media, title, content, icon, onIconButtonClick, links, className }) => {
  const classes = useStyles();

  return (
    <MaterialCard className={[classes.root, className || ''].join(' ').trim()}>
      {media && (
        <CardActionAreaDiv component="div" className={classes.imageContainer}>
          <CardMedia component="img" alt={media.alt} image={media.image} />
          {icon && (
            <button className={classes.iconButton} onClick={onIconButtonClick}>
              {icon}
            </button>
          )}
        </CardActionAreaDiv>
      )}
      <CardContent className={classes.contentContainer}>
        <Typography component="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography component="p" className={classes.content}>
          {content}
        </Typography>
        <span className={classes.divider} />
        <span className={classes.linksContainer}>{links}</span>
      </CardContent>
    </MaterialCard>
  );
};
