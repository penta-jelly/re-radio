import { sortSongs } from 're-radio-common/lib/sort-songs';
import { Card, CircularProgress, Icon, List, Typography } from '@material-ui/core';
import React from 'react';
import { MdPlaylistAdd } from 'react-icons/md';
import { useRouteMatch } from 'react-router-dom';
import { SongStatusEnum, useOnStationPlaylistChangedSubscription, useStationPlaylistQuery } from 'operations';
import { PlaylistItem } from 'modules/station/playlist/item';
import { useStyles } from './styles';

interface RouteParams {
  slug: string;
}

export const Playlist: React.FC = () => {
  const classes = useStyles();

  const match = useRouteMatch<RouteParams>();
  if (!match) {
    throw new Error(`Match not found. The "$stationSlug" is not existed in query param.`);
  }

  const { loading, error, data, updateQuery } = useStationPlaylistQuery({
    variables: { stationSlug: match.params.slug },
    fetchPolicy: 'network-only',
  });

  useOnStationPlaylistChangedSubscription({
    variables: { stationSlug: match.params.slug },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      if (!data) return;
      const { onPlaylistSongChanged } = data;
      if (!onPlaylistSongChanged) return;
      const { entity } = onPlaylistSongChanged;
      updateQuery((prev) => {
        let playlist = prev.playlist.filter((song) => song && song.id !== entity.id);
        if (entity.status === SongStatusEnum.Playing || entity.status === SongStatusEnum.Pending) {
          playlist = [...playlist, { ...entity, __typename: 'Song' }];
        }
        return { ...prev, playlist };
      });
    },
  });

  let content: React.ReactNode = <Typography variant="subtitle1">Playlist</Typography>;
  if (data) {
    if (data.playlist.length === 0) {
      content = (
        <Typography variant="subtitle1">
          Press button{' '}
          <Icon fontSize="inherit">
            <MdPlaylistAdd />
          </Icon>{' '}
          to add a new song
        </Typography>
      );
    } else {
      const songs = sortSongs(data.playlist.map((song) => ({ ...song, createdAt: new Date(song.createdAt) })));
      content = (
        <List className={classes.list} disablePadding dense>
          {songs.map((song) => (
            <PlaylistItem data={song} key={song.id} />
          ))}
        </List>
      );
    }
  } else if (loading) {
    content = <CircularProgress />;
  } else if (error) {
    content = (
      <Typography variant="body1" color="error">
        {error.message}
      </Typography>
    );
  }
  return (
    <Card className={classes.container} elevation={0} square id="playlist-container">
      {content}
    </Card>
  );
};
