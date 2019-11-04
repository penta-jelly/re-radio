import { Card, Typography } from '@material-ui/core';
import React, { useCallback, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useRouteMatch } from 'react-router-dom';
import { SongStatusEnum, useOnStationPlayerChangedSubscription, useStationPlayerQuery } from 'operations';
import { PageLoader } from 'components/page-loader';
import { useStyles } from './styles';

interface RouteParams {
  slug: string;
}

export const Player: React.FC = () => {
  const playerRef = useRef<ReactPlayer>(null);

  const classes = useStyles();

  const match = useRouteMatch<RouteParams>();
  if (!match) {
    throw new Error(`Match not found. Do you $stationSlug is not existed in query param.`);
  }

  const { loading, data, updateQuery } = useStationPlayerQuery({
    variables: { stationSlug: match.params.slug },
    fetchPolicy: 'network-only',
  });

  // TODO: Handle up-vote/down-vote for player

  useOnStationPlayerChangedSubscription({
    variables: { stationSlug: match.params.slug },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      if (!data) return;
      const { onPlayingSongChanged } = data;
      if (!onPlayingSongChanged) return;
      const { entity } = onPlayingSongChanged;
      updateQuery(prev => {
        // Remove the updated entity from the current list first, including played and skipped entity
        let playingSongs = prev.playingSongs.filter(song => song!.id !== entity.id);
        // Then only add the updated entity if the status is playing. Played/skipped status will be ignore.
        if (entity.status === SongStatusEnum.Playing) {
          playingSongs = [...playingSongs, entity];
        }
        return { ...prev, playingSongs };
      });
    },
  });

  const onStart = useCallback(() => {
    if (data) {
      const [playingSong] = data.playingSongs;
      if (playerRef.current && playingSong) {
        const currentTime = new Date().getTime();
        const startPlayerTime = new Date(playingSong.startedAt).getTime();
        const seekTime = currentTime - startPlayerTime;
        playerRef.current.seekTo(seekTime / 1000);
      }
    }
  }, [data, playerRef]);

  let content: React.ReactNode;
  if (loading) {
    content = <PageLoader />;
  } else if (data) {
    const [playingSong] = data.playingSongs;
    if (playingSong) {
      content = (
        <ReactPlayer
          onStart={onStart}
          ref={playerRef}
          className={classes.wrapper}
          width="100%"
          height="100%"
          url={playingSong.url}
          playing
        />
      );
    } else {
      content = (
        <Typography variant="subtitle1">Press on the Action Button on the bottom right to add some songs.</Typography>
      );
    }
  } else {
    content = (
      <Typography variant="subtitle1" color="error">
        something bad happen :(
      </Typography>
    );
  }
  return (
    <Card id="station-player" className={classes.container} elevation={0} square>
      {content}
    </Card>
  );
};
