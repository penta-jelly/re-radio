import React, { useState } from 'react';
import { Typography, Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core';
import { useStyles } from './styles';
import { FaStar, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

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

  const [localUpVote, setUpVote] = useState<boolean>(false);
  const [localDownVote, setDownVote] = useState<boolean>(false);
  const [localIsFavourite, setFavourite] = useState<boolean>(isFavourite || false);
  const [, setUpVoteCount] = useState<number>(upVoteCount || 0);
  const [, setDownVoteCount] = useState<number>(downVoteCount || 0);

  const [favouriteIconColor, setFavouriteIconColor] = useState<string>('grey');
  const [upVoteIconColor, setUpVoteIconColor] = useState<string>('grey');
  const [downVoteIconColor, setDownVoteIconColor] = useState<string>('grey');

  const handleUpvote = () => {
    setUpVoteIconColor(localUpVote ? 'red' : 'grey');
    setUpVote(!localUpVote);
  };

  const handleDownvote = () => {
    setDownVoteIconColor(localDownVote ? 'red' : 'grey');
    setDownVote(!localDownVote);
  };

  const handleFavourite = () => {
    setFavouriteIconColor(localIsFavourite ? 'red' : 'grey');
    setFavourite(!localIsFavourite);
  };

  return (
    <Card className={classes.card}>
      <CardMedia component="img" className={classes.cover} image={thumbnail} title={title} />

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
              <FaThumbsUp className={classes.icon} style={{ color: upVoteIconColor }} />
            </IconButton>
            <Typography className={classes.smallText}>{upVoteCount || 0}</Typography>
            <IconButton disableRipple className={classes.button} aria-label="Downvote song" onClick={handleDownvote}>
              <FaThumbsDown className={classes.icon} style={{ color: downVoteIconColor }} />
            </IconButton>
            <Typography className={classes.smallText}>{downVoteCount || 0}</Typography>
          </CardActions>

          <CardActions className={classes.rightActions}>
            <IconButton
              disableRipple
              className={classes.button}
              aria-label="Favourite to list"
              onClick={handleFavourite}
            >
              <FaStar className={classes.icon} style={{ color: favouriteIconColor }} />
            </IconButton>
          </CardActions>
        </CardActions>
      </div>
    </Card>
  );
};
