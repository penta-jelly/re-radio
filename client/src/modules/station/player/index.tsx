import { Card, Typography, CircularProgress } from '@material-ui/core';
import React, { useCallback, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useRouteMatch } from 'react-router-dom';
import {
  SongStatusEnum,
  useOnStationPlayerChangedSubscription,
  useStationPlayerQuery,
  StationPlayerQuery,
} from 'operations';
import { useStyles } from './styles';

interface RouteParams {
  slug: string;
}

export const Player: React.FC = () => {
  const classes = useStyles();

  const match = useRouteMatch<RouteParams>();
  if (!match) {
    throw new Error(`Match not found. Do you $stationSlug is not existed in query param.`);
  }

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
      const { entity } = onPlayingSongChanged;
      updateQuery(prev => {
        // Remove the updated entity from the current list first, including played and skipped entity
        let playingSongs = prev.playingSongs.filter(song => song!.id !== entity.id);
        // Then only add the updated entity if the status is playing. Played/skipped status will be ignore.
        if (entity.status === SongStatusEnum.Playing) {
          playingSongs = [...playingSongs, { ...entity, __typename: 'Song' }];
        }
        return { ...prev, playingSongs };
      });
    },
  });

  const playingSong = React.useMemo<StationPlayerQuery['playingSongs'][0] | undefined>(() => {
    if (data && data.playingSongs[0]) return data.playingSongs[0];
    return undefined;
  }, [data]);

  const playerRef = useRef<ReactPlayer>(null);
  const syncPlayer = useCallback(() => {
    if (playerRef.current && playingSong) {
      const currentTime = new Date().getTime();
      const startPlayerTime = new Date(playingSong.startedAt).getTime();
      const seekTime = currentTime - startPlayerTime;
      const seekToSeconds = seekTime / 1000;
      // Only sync when the client player time and server player time mismatched more than 5 seconds
      if (Math.abs(playerRef.current.getCurrentTime() - seekToSeconds) > 5) {
        playerRef.current.seekTo(seekTime / 1000);
      }
    }
  }, [playingSong, playerRef]);

  const prevUrlRef = React.useRef<string | undefined>(undefined);
  const prevIdRef = React.useRef<number | undefined>(undefined);

  // This variable is mean to keep the previous URL so that the player will not be unmounted on down time between playing songs
  const url = React.useMemo<string | undefined>(() => {
    if (playingSong) return playingSong.url;
    if (prevUrlRef.current) return prevUrlRef.current;
    return undefined;
  }, [playingSong]);

  React.useEffect(() => {
    if (playingSong && url === prevUrlRef.current && playingSong.id !== prevIdRef.current) syncPlayer();
  }, [data, playingSong, syncPlayer, url]);

  React.useEffect(() => {
    if (playingSong) prevIdRef.current = playingSong.id;
  }, [data, playingSong]);

  React.useEffect(() => {
    prevUrlRef.current = url;
  }, [url]);

  let content: React.ReactNode;
  if (url) {
    // Always try to render the ReactPlayer when url is available
    content = (
      <ReactPlayer
        onPlay={syncPlayer}
        ref={playerRef}
        className={classes.wrapper}
        youtubeConfig={{ playerVars: { controls: 0 }, preload: true }}
        width="100%"
        height="100%"
        url={url}
      />
    );
  } else if (loading) {
    content = <CircularProgress />;
  } else if (!playingSong) {
    content = <Typography variant="subtitle1">TODO: Render something cool!</Typography>;
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
