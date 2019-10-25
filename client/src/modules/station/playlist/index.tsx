import { Card, CircularProgress, List, Typography } from '@material-ui/core';
import { useRouter } from 'hooks/use-router';
import { PlaylistItem } from 'modules/station/playlist/item';
import { SongStatusEnum, useOnStationPlalistChangedSubscription, useStationPlayistQuery } from 'operations';
import React from 'react';
import { useStyles } from './styles';

interface RouteParams {
  slug: string;
}

export const Playlist: React.FC = () => {
  const classes = useStyles();
  const { match } = useRouter<RouteParams>();

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
      if (!entity) return;
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
    content = (
      <List className={classes.list} disablePadding dense>
        {data.playlist.map(song => song && <PlaylistItem data={song} key={song.id} />)}
      </List>
    );
  }
  return <Card className={classes.container}>{content}</Card>;
};
