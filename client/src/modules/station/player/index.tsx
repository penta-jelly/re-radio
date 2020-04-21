import { Card, CircularProgress, Typography } from '@material-ui/core';
import React, { useCallback, useRef } from 'react';
import ReactPlayer, { Config as ReactPlayerConfig } from 'react-player';
import { useRouteMatch } from 'react-router-dom';
import {
  SongStatusEnum,
  StationPlayerQuery,
  useOnStationPlayerChangedSubscription,
  useStationPlayerQuery,
} from 'operations';
import { usePreviousNonNullableValue } from 'hooks/use-previous-non-nullable-value';
import { useStationContextState } from '../context';
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

  const {
    player: { muted },
  } = useStationContextState();

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
      updateQuery((prev) => {
        // Remove the updated entity from the current list first, including played and skipped entity
        let playingSongs = prev.playingSongs.filter((song) => song!.id !== entity.id);
        // Then only add the updated entity if the status is playing. Played/skipped status will be ignore.
        if (entity.status === SongStatusEnum.Playing) {
          playingSongs = [...playingSongs, { ...entity, __typename: 'Song' }];
        }
        return { ...prev, playingSongs };
      });
    },
  });

  const playingSong = React.useMemo<StationPlayerQuery['playingSongs'][0] | undefined>(() => {
    if (data?.playingSongs[0]) return data.playingSongs[0];
    return undefined;
  }, [data]);

  const playerRef = useRef<ReactPlayer>(null);
  const syncPlayer = useCallback(() => {
    if (playerRef.current && playingSong) {
      const currentTime = new Date().getTime();
      const startPlayerTime = new Date(playingSong.startedAt).getTime();
      const seekTime = currentTime - startPlayerTime;
      const seekToSeconds = seekTime / 1000;
      // Only sync when the client player time and server player time is out of sync for more than 5 seconds
      if (Math.abs(playerRef.current.getCurrentTime() - seekToSeconds) > 5) {
        playerRef.current.seekTo(seekToSeconds);
      }
    }
  }, [playingSong, playerRef]);

  // This variable is mean to keep the previous URL so that the player will not be unmounted on down time between playing songs
  const [url] = usePreviousNonNullableValue(playingSong?.url);
  const [id] = usePreviousNonNullableValue(playingSong?.id);

  const playerConfig = React.useMemo<ReactPlayerConfig>(
    () => ({ youtube: { playerVars: { controls: 0 }, preload: true } }),
    [],
  );

  let content: React.ReactNode;
  // Always try to render the ReactPlayer when url is available
  if (url) {
    content = (
      <ReactPlayer
        // A cheat to workaround the memorized url value
        // this will make sure re-playability of the same song URL will always have a difference URL
        url={`${url}&re-radio-song-id=${id}`}
        onPlay={syncPlayer}
        ref={playerRef}
        className={classes.wrapper}
        config={playerConfig}
        width="100%"
        height="100%"
        muted={muted}
        playing
      />
    );
  } else if (loading) {
    content = <CircularProgress />;
  } else if (!playingSong) {
    content = null;
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
