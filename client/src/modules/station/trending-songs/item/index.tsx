import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, CircularProgress } from '@material-ui/core';
import { MdPlaylistAdd } from 'react-icons/md';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import { useSnackbar } from 'notistack';
import {
  useCreateSongMutation,
  useCurrentUserQuery,
  YoutubeTrendingVideosQuery,
  YoutubeVideoQuery,
  YoutubeVideoQueryVariables,
  YoutubeVideoDocument,
} from 'operations';
import { useUnauthorizedNotification } from 'hooks/use-unauthorized-notification';
import { useToggle } from 'hooks/use-toggle';
import { useStyles } from './styles';

interface Props {
  data: NonNullable<YoutubeTrendingVideosQuery['youtubeTrendingVideos'][0]>;
}

interface RouteParams {
  slug: string;
}

export const HistorySongItem: React.FC<Props> = (props) => {
  const classes = useStyles();
  const match = useRouteMatch<RouteParams>();
  if (!match) {
    throw new Error(`Match not found. The "$stationSlug" is not existed in query param.`);
  }

  const { enqueueSnackbar } = useSnackbar();
  const client = useApolloClient();
  const [mutating, , setMutating] = useToggle(false);
  const [addSong] = useCreateSongMutation();
  const currentUserQuery = useCurrentUserQuery();
  const notifyUnauthorizedUser = useUnauthorizedNotification();

  const onPlaySongClick = React.useCallback(async () => {
    if (currentUserQuery.error || currentUserQuery.loading) {
      notifyUnauthorizedUser();
    } else {
      setMutating.on();
      try {
        const { data } = await client.query<YoutubeVideoQuery, YoutubeVideoQueryVariables>({
          query: YoutubeVideoDocument,
          variables: { where: { videoId: props.data.id } },
        });

        addSong({
          variables: {
            data: {
              title: props.data.snippet.title,
              duration: data.youtubeVideo.contentDetails.duration,
              url: `https://www.youtube.com/watch?v=${data.youtubeVideo.id}`,
              thumbnail: props.data.snippet.thumbnails.default.url,
              stationSlug: match.params.slug,
            },
          },
        });
      } catch (e) {
        enqueueSnackbar(e.message, { variant: 'error' });
      } finally {
        setMutating.off();
      }
    }
  }, [
    addSong,
    client,
    currentUserQuery,
    enqueueSnackbar,
    match.params.slug,
    notifyUnauthorizedUser,
    props.data,
    setMutating,
  ]);

  const { title, thumbnails, channelTitle } = props.data.snippet;
  return (
    <ListItem dense>
      <div className={classes.thumbnailContainer}>
        <img src={thumbnails.default.url} alt={title} className={classes.thumbnail} />
      </div>
      <ListItemText
        primary={
          <span className={classes.text} title={title}>
            {title}
          </span>
        }
        secondary={
          <span className={classes.text} title={channelTitle}>
            {channelTitle}
          </span>
        }
      />
      <ListItemSecondaryAction>
        {mutating ? (
          <CircularProgress size={26} />
        ) : (
          <IconButton onClick={onPlaySongClick} size="small">
            <MdPlaylistAdd />
          </IconButton>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
};
