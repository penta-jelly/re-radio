import { Fab } from '@material-ui/core';
import { FabProps as MuiFabProps } from '@material-ui/core/Fab';
import { useRouter } from 'hooks/use-router';
import { useUnauthorizedNotification } from 'hooks/use-unauthorized-notification';
import {
  SongStatusEnum,
  useCreateSongMutation,
  useCurrentUserQuery,
  useYoutubeVideoLazyQuery,
  YoutubeVideo,
} from 'operations';
import React, { useCallback } from 'react';
import { MdSend } from 'react-icons/md';

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
  const { match } = useRouter<RouteParams>();
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
    if (currentUserQuery.data && !currentUserQuery.data.user) {
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
                status: SongStatusEnum.Pending,
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
    currentUserQuery.loading,
    currentUserQuery.data,
    youtubeVideoQuery.loading,
    youtubeVideoQuery.data,
    addSong,
    match.params.slug,
    postSubmit,
    notifyUnauthorizedUser,
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
