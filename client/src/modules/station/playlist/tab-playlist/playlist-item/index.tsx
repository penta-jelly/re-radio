import React, { useState, useEffect } from 'react';
import { Typography, Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core';
import { useStyles } from './styles';

import UpvoteIcon from '@material-ui/icons/ThumbUpOutlined';
import DownvoteIcon from '@material-ui/icons/ThumbDownOutlined';
import FavouritesIcon from '@material-ui/icons/StarOutlined';

interface IItemProps {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  duration: number;
  creator: ICreator;
  author?: string;
  upVoteCount?: number;
  downVoteCount?: number;
  isFavourite?: boolean;
  createdAt?: any;
  updatedAt?: any;
}

interface ICreator {
  email: string;
  username?: string | null;
  name?: string | null;
  avatarUrl?: string | null;
}

interface IPlayListItemProps {
  item: IItemProps;
}

export const PlaylistItem: React.FC<IPlayListItemProps> = ({
  item: { url, title, author, creator, upVoteCount, downVoteCount, isFavourite, thumbnail },
}) => {
  const classes = useStyles();

  const [upVote, setUpVote] = useState<boolean>(false);
  const [downVote, setDownVote] = useState<boolean>(false);
  const [, setFavourite] = useState<boolean>(isFavourite || false);
  const [, setUpVoteCount] = useState<number>(upVoteCount || 0);
  const [, setDownVoteCount] = useState<number>(downVoteCount || 0);

  const handleUpvote = () => setUpVote(!upVote);
  const handleDownvote = () => setDownVote(!downVote);

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cover} image={thumbnail} title={title} />

      <div className={classes.actionArea}>
        <CardContent className={classes.heading}>
          <Typography component="h5" className={classes.title}>
            {title}
          </Typography>
          <Typography component="p" className={classes.smallText}>
            {author || 'Undefined'}
          </Typography>
          <Typography component="p" className={classes.smallText}>
            {creator.username}
          </Typography>
        </CardContent>

        <CardActions className={classes.mainActions}>
          <CardActions className={classes.leftActions}>
            <IconButton className={classes.button} aria-label="Upvote song" onClick={handleUpvote}>
              <UpvoteIcon className={classes.icon} />
            </IconButton>
            <Typography className={classes.smallText}>{upVoteCount || 0}</Typography>
            <IconButton disableRipple className={classes.button} aria-label="Downvote song" onClick={handleDownvote}>
              <DownvoteIcon className={classes.icon} />
            </IconButton>
            <Typography className={classes.smallText}>{downVoteCount || 0}</Typography>
          </CardActions>

          <CardActions className={classes.rightActions}>
            <IconButton disableRipple className={classes.button} aria-label="Favourite to list">
              <FavouritesIcon className={classes.icon} />
            </IconButton>
          </CardActions>
        </CardActions>
      </div>
    </Card>
  );
};
