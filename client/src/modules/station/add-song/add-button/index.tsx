import { Fab } from '@material-ui/core';
import { FabProps as MuiFabProps } from '@material-ui/core/Fab';
import React, { useCallback } from 'react';
import { MdSend } from 'react-icons/md';
import { useRouteMatch } from 'react-router-dom';
import { useCreateSongMutation, useCurrentUserQuery, useYoutubeVideoLazyQuery, YoutubeVideo } from 'operations';
import { useUnauthorizedNotification } from 'hooks/use-unauthorized-notification';

interface Props {
  previewSong?: YoutubeVideo;
  postSubmit?(): void;
  muiProps?: MuiFabProps;
}

interface RouteParams {
  slug: string;
}

export const AddButton: React.FC<Props> = ({ previewSong, postSubmit, muiProps }) => {
  const [addSong, createSongMutation] = useCreateSongMutation();
  const match = useRouteMatch<RouteParams>();
  if (!match) {
    throw new Error(`Match not found. Do you $stationSlug is not existed in query param.`);
  }
  const currentUserQuery = useCurrentUserQuery();
  const notifyUnauthorizedUser = useUnauthorizedNotification();

  const [queryYoutubeVideo, youtubeVideoQuery] = useYoutubeVideoLazyQuery();

  React.useEffect(() => {
    if (previewSong && previewSong.id) {
      queryYoutubeVideo({ variables: { where: { videoId: previewSong.id } } });
    }
  }, [previewSong, queryYoutubeVideo]);

  // TODO: DO NOT ALLOW TO SUBMIT IF DURATION = 0
  const onSubmit = useCallback(async () => {
    if (currentUserQuery.error) {
      notifyUnauthorizedUser();
    } else {
      if (
        !currentUserQuery.loading &&
        currentUserQuery.data &&
        currentUserQuery.data.user &&
        !youtubeVideoQuery.loading &&
        youtubeVideoQuery.data &&
        youtubeVideoQuery.data.youtubeVideo
      ) {
        try {
          const thumbnail =
            youtubeVideoQuery.data.youtubeVideo.snippet.thumbnails.high ||
            youtubeVideoQuery.data.youtubeVideo.snippet.thumbnails.medium ||
            youtubeVideoQuery.data.youtubeVideo.snippet.thumbnails.default;

          await addSong({
            variables: {
              data: {
                title: youtubeVideoQuery.data.youtubeVideo.snippet.title,
                duration: youtubeVideoQuery.data.youtubeVideo.contentDetails.duration,
                url: `https://www.youtube.com/watch?v=${youtubeVideoQuery.data.youtubeVideo.id}`,
                thumbnail: thumbnail.url,
                stationSlug: match.params.slug,
              },
            },
          });
          if (postSubmit) {
            postSubmit();
          }
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, [
    currentUserQuery.error,
    currentUserQuery.loading,
    currentUserQuery.data,
    notifyUnauthorizedUser,
    youtubeVideoQuery.loading,
    youtubeVideoQuery.data,
    addSong,
    match,
    postSubmit,
  ]);

  return (
    <Fab
      {...muiProps}
      id="submit-song-button"
      size="medium"
      color="primary"
      disabled={!previewSong || createSongMutation.loading || youtubeVideoQuery.loading}
      onClick={onSubmit}
    >
      <MdSend />
    </Fab>
  );
};
