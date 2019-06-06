import { Grid } from '@material-ui/core';
import React, { useCallback } from 'react';
import { PrimaryButton } from 'components/button/primary-button';
import { useStyles } from './styles';
import {
  MiniSongExplorer,
  SongStatusEnum,
  useCreateSongMutation,
  useCurrentUserQuery,
  useSongExplorerQuery,
} from 'operations';
import { useRouter } from 'hooks/use-router';

interface Props {
  previewSong?: MiniSongExplorer;
  postSubmit?(): void;
}

interface RouteParams {
  slug: string;
}

export const AddButton: React.FC<Props> = ({ previewSong, postSubmit }) => {
  const classes = useStyles();
  const addSong = useCreateSongMutation();
  const { match } = useRouter<RouteParams>();
  const currentUserQuery = useCurrentUserQuery();

  const songExplorerQuery = useSongExplorerQuery({
    variables: {
      where: {
        videoId: previewSong && previewSong.id,
      },
    },
  });

  // TODO: DO NOT ALLOW TO SUBMIT IF DURATION = 0
  const onSubmit = useCallback(async () => {
    if (
      !currentUserQuery.loading &&
      currentUserQuery.data &&
      !songExplorerQuery.loading &&
      songExplorerQuery.data &&
      songExplorerQuery.data.songExplorer
    ) {
      try {
        await addSong({
          variables: {
            data: {
              title: songExplorerQuery.data.songExplorer.snippet.title,
              status: SongStatusEnum.Pending,
              duration: songExplorerQuery.data.songExplorer.contentDetails.duration,
              url: `https://www.youtube.com/watch?v=${songExplorerQuery.data.songExplorer.id}`,
              thumbnail: songExplorerQuery.data.songExplorer.snippet.thumbnails.default.url,
              station: {
                connect: { slug: match.params.slug },
              },
              creator: {
                connect: { username: currentUserQuery.data.user.username },
              },
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
  }, [
    currentUserQuery.loading,
    currentUserQuery.data,
    songExplorerQuery.loading,
    songExplorerQuery.data,
    addSong,
    match.params.slug,
    postSubmit,
  ]);

  return (
    <Grid item xs={12} className={classes.submitButtonContainer}>
      <PrimaryButton id="submit-song-button" disabled={!previewSong} onClick={onSubmit}>
        Add to playlist
      </PrimaryButton>
    </Grid>
  );
};
