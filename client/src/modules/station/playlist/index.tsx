import { Card, CircularProgress, List, Typography } from '@material-ui/core';
import { sortSongs } from 're-radio-common';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { SongStatusEnum, useOnStationPlalistChangedSubscription, useStationPlayistQuery } from 'operations';
import { PlaylistItem } from 'modules/station/playlist/item';
import { useStyles } from './styles';

interface RouteParams {
  slug: string;
}

export const Playlist: React.FC = () => {
  const classes = useStyles();

  const match = useRouteMatch<RouteParams>();
  if (!match) {
    throw new Error(`Match not found. Do you $stationSlug is not existed in query param.`);
  }

  const { loading, error, data, updateQuery } = useStationPlayistQuery({
    variables: { stationSlug: match.params.slug },
    fetchPolicy: 'network-only',
  });

  useOnStationPlalistChangedSubscription({
    variables: { stationSlug: match.params.slug },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      if (!data) return;
      const { onPlaylistSongChanged } = data;
      if (!onPlaylistSongChanged) return;
      const { entity } = onPlaylistSongChanged;
      updateQuery(prev => {
        let playlist = prev.playlist.filter(song => song && song.id !== entity.id);
        if (entity.status === SongStatusEnum.Playing || entity.status === SongStatusEnum.Pending) {
          playlist = [...playlist, entity];
        }
        return { ...prev, playlist };
      });
    },
  });

  let content: React.ReactNode = <Typography variant="subtitle1">Playlist</Typography>;
  if (loading) {
    content = <CircularProgress />;
  } else if (error) {
    content = <CircularProgress />;
  } else if (data && data.playlist) {
    const songs = sortSongs(data.playlist.map(song => ({ ...song, createdAt: new Date(song.createdAt) })));
    content = (
      <List className={classes.list} disablePadding dense>
        {songs.map(song => song && <PlaylistItem data={song} key={song.id} />)}
      </List>
    );
  }
  return (
    <Card className={classes.container} elevation={0} square id="playlist-container">
      {content}
    </Card>
  );
};
