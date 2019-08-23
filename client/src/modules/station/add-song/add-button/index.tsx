import { Fab } from '@material-ui/core';
import { useRouter } from 'hooks/use-router';
import { useUnauthorizedNotification } from 'hooks/use-unauthorized-notification';
import {
  MiniSongExplorer,
  SongStatusEnum,
  useCreateSongMutation,
  useCurrentUserQuery,
  useSongExplorerQuery,
} from 'operations';
import React, { useCallback } from 'react';
import { MdSend } from 'react-icons/md';

interface Props {
  previewSong?: MiniSongExplorer;
  postSubmit?(): void;
}

interface RouteParams {
  slug: string;
}

export const AddButton: React.FC<Props> = ({ previewSong, postSubmit }) => {
  const [addSong, createSongMutation] = useCreateSongMutation();
  const { match } = useRouter<RouteParams>();
  const currentUserQuery = useCurrentUserQuery();
  const notifyUnauthorizedUser = useUnauthorizedNotification();

  const songExplorerQuery = useSongExplorerQuery({
    variables: {
      where: {
        videoId: previewSong && previewSong.id,
      },
    },
  });

  // TODO: DO NOT ALLOW TO SUBMIT IF DURATION = 0
  const onSubmit = useCallback(async () => {
    if (currentUserQuery.data && !currentUserQuery.data.user) {
      notifyUnauthorizedUser();
    } else {
      if (
        !currentUserQuery.loading &&
        currentUserQuery.data &&
        currentUserQuery.data.user &&
        !songExplorerQuery.loading &&
        songExplorerQuery.data &&
        songExplorerQuery.data.songExplorer
      ) {
        try {
          const thumbnail =
            songExplorerQuery.data.songExplorer.snippet.thumbnails.high ||
            songExplorerQuery.data.songExplorer.snippet.thumbnails.medium ||
            songExplorerQuery.data.songExplorer.snippet.thumbnails.default;

          await addSong({
            variables: {
              data: {
                title: songExplorerQuery.data.songExplorer.snippet.title,
                status: SongStatusEnum.Pending,
                duration: songExplorerQuery.data.songExplorer.contentDetails.duration,
                url: `https://www.youtube.com/watch?v=${songExplorerQuery.data.songExplorer.id}`,
                thumbnail: thumbnail.url,
                station: { connect: { slug: match.params.slug } },
                creator: { connect: { username: currentUserQuery.data.user.username } },
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
    songExplorerQuery.loading,
    songExplorerQuery.data,
    addSong,
    match.params.slug,
    postSubmit,
    notifyUnauthorizedUser,
  ]);

  return (
    <Fab
      id="submit-song-button"
      size="medium"
      color="primary"
      disabled={!previewSong || createSongMutation.loading || songExplorerQuery.loading}
      onClick={onSubmit}
    >
      <MdSend />
    </Fab>
  );
};
