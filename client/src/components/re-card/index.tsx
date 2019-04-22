import { Card as MaterialCard, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { CardActionAreaProps } from '@material-ui/core/CardActionArea';
import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../image';
import { useStyles } from './styles';

const CardActionAreaDiv = CardActionArea as React.ComponentType<
  CardActionAreaProps & { component?: React.ElementType }
>;

interface Props {
  id?: string;
  media?: {
    alt?: string;
    image?: string;
    linkTo?: string;
  };
  title?: string;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  links?: React.ReactNode;
  className?: string;
  onIconButtonClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export const ReCard: React.FC<Props> = ({ id, media, title, content, icon, onIconButtonClick, links, className }) => {
  const classes = useStyles();

  const cardMedia = React.useMemo(
    () => (
      <CardActionAreaDiv component="div" className={classes.imageContainer}>
        <Image className={classes.image} alt={media && media.alt} src={media && media.image} data-role="card-media" />
        {icon && (
          <button className={classes.iconButton} onClick={onIconButtonClick}>
            {icon}
          </button>
        )}
      </CardActionAreaDiv>
    ),
    [media, classes, icon, onIconButtonClick],
  );

  return (
    <MaterialCard className={[classes.root, className || ''].join(' ').trim()} id={id}>
      {media && media.linkTo ? <Link to={media.linkTo}>{cardMedia}</Link> : cardMedia}
      <CardContent className={classes.contentContainer}>
        <Typography component="h5" className={classes.title} data-role="card-title">
          {title}
        </Typography>
        <Typography component="p" className={classes.content} data-role="card-content">
          {content}
        </Typography>
        <span className={classes.divider} />
        <span className={classes.linksContainer}>{links}</span>
      </CardContent>
    </MaterialCard>
  );
};
