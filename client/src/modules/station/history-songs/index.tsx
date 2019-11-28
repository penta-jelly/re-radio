import { Card, CircularProgress, List, Typography } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useHistorySongsQuery } from 'operations';
import { useScrollMonitor } from 'hooks/use-scroll-monitor';
import { HistorySongItem } from './item';
import { useStyles } from './styles';

interface RouteParams {
  slug: string;
}

export const HistorySongs: React.FC = () => {
  const classes = useStyles();

  const match = useRouteMatch<RouteParams>();
  if (!match) {
    throw new Error(`Match not found. Do you $stationSlug is not existed in query param.`);
  }

  const baseIncrement = 15;
  const [take, setTake] = React.useState(baseIncrement);

  const { loading, error, data } = useHistorySongsQuery({
    variables: { stationSlug: match.params.slug, pagination: { take } },
    fetchPolicy: 'network-only',
  });

  const onBottomReached = React.useCallback(() => !loading && setTake(value => value + baseIncrement), [loading]);
  const [, ref] = useScrollMonitor({ onBottomReached }, [data]);

  let content: React.ReactNode = <Typography variant="subtitle1">History</Typography>;
  if (data) {
    if (data.songs.length === 0) {
      content = <Typography variant="subtitle1">No songs in the history</Typography>;
    } else {
      content = (
        <List className={classes.list} disablePadding dense innerRef={ref}>
          {data.songs.map(song => (
            <HistorySongItem data={song} key={song.title} />
          ))}
          {loading && (
            <div className={classes.listLoadingItemContainer}>
              <CircularProgress className={classes.listLoadingItemContent} />
            </div>
          )}
        </List>
      );
    }
  } else if (loading) {
    content = <CircularProgress />;
  } else if (error) {
    content = <Typography variant="subtitle1">{error.message}</Typography>;
  }
  return (
    <Card className={classes.container} elevation={0} square id="playlist-container">
      {content}
    </Card>
  );
};
