import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, CircularProgress } from '@material-ui/core';
import { MdReplay } from 'react-icons/md';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { HistorySongsQuery, useCreateSongMutation, useCurrentUserQuery } from 'operations';
import { useUnauthorizedNotification } from 'hooks/use-unauthorized-notification';
import { useStyles } from './styles';

interface Props {
  data: NonNullable<HistorySongsQuery['songs'][0]>;
}

interface RouteParams {
  slug: string;
}

export const HistorySongItem: React.FC<Props> = props => {
  const classes = useStyles();
  const match = useRouteMatch<RouteParams>();
  if (!match) {
    throw new Error(`Match not found. Do you $stationSlug is not existed in query param.`);
  }

  const [addSong, createSongMutation] = useCreateSongMutation();
  const currentUserQuery = useCurrentUserQuery();
  const notifyUnauthorizedUser = useUnauthorizedNotification();
  const onReplayClick = React.useCallback(() => {
    if (currentUserQuery.error || currentUserQuery.loading) {
      notifyUnauthorizedUser();
    } else {
      addSong({
        variables: {
          data: {
            title: props.data.title,
            duration: props.data.duration,
            url: props.data.url,
            thumbnail: props.data.thumbnail,
            stationSlug: match.params.slug,
          },
        },
      });
    }
  }, [addSong, currentUserQuery, match.params.slug, notifyUnauthorizedUser, props.data]);

  const { title, thumbnail, playedTimes, creatorIds } = props.data;
  return (
    <ListItem dense>
      <div className={classes.thumbnailContainer}>
        <img src={thumbnail} alt={title} className={classes.thumbnail} />
      </div>
      <ListItemText
        disableTypography
        primary={<div className={classes.text}>{title}</div>}
        secondary={`Played ${playedTimes} times by ${creatorIds.length} users.`}
      />
      <ListItemSecondaryAction>
        {createSongMutation.loading ? (
          <CircularProgress size={16} />
        ) : (
          <IconButton onClick={onReplayClick} size="small">
            <MdReplay />
          </IconButton>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
};
