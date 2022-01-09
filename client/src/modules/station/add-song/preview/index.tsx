import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useCurrentUserQuery, YoutubeVideo } from 'operations';
import { useStyles } from './styles';

interface Props {
  previewSong?: YoutubeVideo;
}
export const Preview: React.FC<Props> = ({ previewSong }) => {
  const classes = useStyles();
  const currentUser = useCurrentUserQuery();

  return previewSong ? (
    <Grid container className={classes.container}>
      <Grid item xs={3} className={classes.previewThumbnailContainer}>
        <img
          src={previewSong.snippet.thumbnails.default.url}
          className={classes.previewImg}
          id="preview-image"
          alt={previewSong.snippet.title}
        />
      </Grid>
      <Grid item xs={9} className={classes.previewContent}>
        <Typography
          dangerouslySetInnerHTML={{ __html: previewSong.snippet.title }}
          variant="body1"
          className={classes.songTitle}
          id="preview-song-title"
        />
        <Typography variant="body2" id="preview-song-channel">
          {previewSong.snippet.channelTitle}
        </Typography>
        {currentUser.data?.user && (
          <Typography variant="caption" className={classes.creator} id="song-creator">
            Added by {currentUser.data.user.username}
          </Typography>
        )}
      </Grid>
    </Grid>
  ) : (
    <img
      src="/asset/image/loading_song.png"
      alt="Waiting for a song"
      className={classes.defaultCover}
      id="default-preview-cover"
    />
  );
};
