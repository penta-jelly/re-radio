import { CircularProgress, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import React from 'react';
import { MdPlaylistAdd } from 'react-icons/md';
import { useRouteMatch } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import { useSnackbar } from 'notistack';
import {
  useCreateSongMutation,
  useCurrentUserQuery,
  YoutubeVideosQuery,
  YoutubeVideoDocument,
  YoutubeVideoQuery,
  YoutubeVideoQueryVariables,
} from 'operations';
import { useUnauthorizedNotification } from 'hooks/use-unauthorized-notification';
import { useToggle } from 'hooks/use-toggle';
import { useStyles } from './styles';

interface Props {
  data: NonNullable<YoutubeVideosQuery['youtubeVideos'][0]>;
}

interface RouteParams {
  slug: string;
}

export const RelatedSongItem: React.FC<Props> = (props) => {
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
  const onReplayClick = React.useCallback(async () => {
    if (currentUserQuery.error || currentUserQuery.loading) {
      notifyUnauthorizedUser();
    } else {
      setMutating.on();
      try {
        const { data } = await client.query<YoutubeVideoQuery, YoutubeVideoQueryVariables>({
          query: YoutubeVideoDocument,
          variables: { where: { videoId: props.data.id } },
        });

        await addSong({
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
    currentUserQuery.error,
    currentUserQuery.loading,
    enqueueSnackbar,
    match.params.slug,
    notifyUnauthorizedUser,
    props.data,
    setMutating,
  ]);

  const {
    title,
    thumbnails: { default: defaultThumbnail },
    channelTitle,
  } = props.data.snippet;
  return (
    <ListItem dense>
      <div className={classes.thumbnailContainer}>
        <img src={defaultThumbnail.url} alt={title} className={classes.thumbnail} />
      </div>
      <ListItemText
        primary={<span className={classes.text}>{title}</span>}
        secondary={<span className={classes.text}>{channelTitle}</span>}
      />
      <ListItemSecondaryAction>
        {mutating ? (
          <CircularProgress size={26} />
        ) : (
          <IconButton onClick={onReplayClick} size="small">
            <MdPlaylistAdd />
          </IconButton>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
};
