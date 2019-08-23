import { Card, Typography } from '@material-ui/core';
import { PageLoader } from 'components/page-loader';
import { useRouter } from 'hooks/use-router';
import { SongStatusEnum, useOnStationPlayerChangedSubscription, useStationPlayerQuery } from 'operations';
import React from 'react';
import { useStyles } from './styles';

interface RouteParams {
  slug: string;
}

export const Player: React.FC = () => {
  const classes = useStyles();
  const { match } = useRouter<RouteParams>();

  const { loading, data, updateQuery } = useStationPlayerQuery({
    variables: { stationSlug: match.params.slug },
    fetchPolicy: 'network-only',
  });

  useOnStationPlayerChangedSubscription({
    variables: { stationSlug: match.params.slug },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      if (!data) return;
      const { onPlayingSongChanged } = data;
      if (!onPlayingSongChanged) return;
      const { node } = onPlayingSongChanged;
      if (!node) return;
      updateQuery(prev => {
        // Remove the updated node from the current list first, including played and skipped node
        let playingSongs = prev.playingSongs.filter(song => song!.id !== node.id);
        // Then only add the updated node if the status is playing. Played/skipped status will be ignore.
        if (node.status === SongStatusEnum.Playing) {
          playingSongs = [...playingSongs, node];
        }
        return { ...prev, playingSongs };
      });
    },
  });

  let content: React.ReactNode;
  if (loading) {
    content = <PageLoader />;
  } else if (data) {
    const [playingSong] = data.playingSongs;
    if (playingSong) {
      // TODO: Render a real youtube player instead of a fixed thumbnail and text
      content = (
        <div className={classes.wrapper} style={{ backgroundImage: `url(${playingSong.thumbnail})` }}>
          <Typography variant="h4">{playingSong.title}</Typography>
        </div>
      );
    } else {
      content = <Typography variant="subtitle1">No song, add a new song to playlist first</Typography>;
    }
  } else {
    content = (
      <Typography variant="subtitle1" color="error">
        something bad happen :(
      </Typography>
    );
  }
  return (
    <Card id="station-player" className={classes.container}>
      {content}
    </Card>
  );
};
