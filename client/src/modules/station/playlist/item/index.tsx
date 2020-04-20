import React from 'react';
import { ListItem, ListItemText, Typography, LinearProgress, IconButton } from '@material-ui/core';
import { GiMusicalNotes } from 'react-icons/gi';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import { SongStatusEnum, StationPlaylistQuery } from 'operations';
import { Image } from 'components/image';
import { useStyles } from './styles';

interface Props {
  data: NonNullable<StationPlaylistQuery['playlist'][0]>;
}

export const PlaylistItem: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { title, status, thumbnail, duration, creator } = props.data;

  // TODO: upVote & downVote mutations
  return (
    <ListItem selected={status === SongStatusEnum.Playing} dense>
      <div className={classes.thumbnailContainer}>
        <img src={thumbnail} alt={title} className={classes.thumbnail} />
        <span className={classes.duration}>{duration}</span>
      </div>
      <ListItemText
        disableTypography
        primary={
          <div className={classes.primaryContent}>
            <div className={classes.text}>{title}</div>
            {status === 'PLAYING' && (
              <span>
                <GiMusicalNotes />
              </span>
            )}
          </div>
        }
        secondary={
          <div className={classes.secondaryContent}>
            <div>
              <Typography variant="caption" className={classes.creator}>
                Added by
                <Image
                  alt={creator.username}
                  title={creator.username}
                  src={creator.avatarUrl || '/asset/avatar/female.png'}
                  className={classes.creatorAvatar}
                />
              </Typography>
            </div>
            <div className={classes.vote}>
              <Typography variant="caption">99</Typography>
              <IconButton size="small" className={classes.voteButton}>
                <MdThumbUp />
              </IconButton>
              <IconButton size="small" className={classes.voteButton}>
                <MdThumbDown />
              </IconButton>
              <Typography variant="caption">2</Typography>
              <div>
                <LinearProgress variant="determinate" value={40} color="primary" className={classes.voteIndicator} />
              </div>
            </div>
          </div>
        }
        title={title}
      />
    </ListItem>
  );
};
