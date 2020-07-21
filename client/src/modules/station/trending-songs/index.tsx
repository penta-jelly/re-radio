import { Card, CircularProgress, List, Typography } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useYoutubeTrendingVideosQuery } from 'operations';
import { useLocalStorage } from 'hooks/use-local-storage';
import { HistorySongItem as TrendingSongItem } from './item';
import { useStyles } from './styles';
import { PreferredRegionPicker } from './preferred-region-picker';

interface RouteParams {
  slug: string;
}

export const TrendingSongs: React.FC = () => {
  const classes = useStyles();

  const match = useRouteMatch<RouteParams>();
  if (!match) {
    throw new Error(`Match not found. The "$stationSlug" is not existed in query param.`);
  }

  const [preferredRegion, setPreferredRegion] = useLocalStorage('preferredRegion', '');
  const { loading, error, data } = useYoutubeTrendingVideosQuery({
    variables: { where: { maxResults: 20, regionCode: preferredRegion.length === 0 ? undefined : preferredRegion } },
    fetchPolicy: 'cache-and-network',
  });

  React.useEffect(() => {
    if (data?.preferredRegion && preferredRegion.length === 0) {
      setPreferredRegion(data.preferredRegion);
    }
  }, [data, preferredRegion, setPreferredRegion]);

  let content: React.ReactNode = <Typography variant="subtitle1">History</Typography>;
  if (data) {
    if (data.youtubeTrendingVideos.length === 0) {
      content = <Typography variant="subtitle1">No songs in the history</Typography>;
    } else {
      content = (
        <div className={classes.listContainer}>
          <div className={classes.preferredRegionContainer}>
            <PreferredRegionPicker selectedRegion={preferredRegion} onRegionChange={setPreferredRegion} />
          </div>
          <List className={classes.list} disablePadding dense>
            {data.youtubeTrendingVideos.map((song) => (
              <TrendingSongItem data={song} key={song.id} />
            ))}
            {loading && (
              <div className={classes.listLoadingItemContainer}>
                <CircularProgress className={classes.listLoadingItemContent} />
              </div>
            )}
          </List>
        </div>
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
