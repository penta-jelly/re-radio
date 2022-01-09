import { Card, CircularProgress, List, Typography } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useStationPlayerQuery, useYoutubeVideosLazyQuery } from 'operations';
import { RelatedSongItem } from './item';
import { useStyles } from './styles';

interface RouteParams {
  slug: string;
}

export const RelatedSongs: React.FC = () => {
  const classes = useStyles();

  const match = useRouteMatch<RouteParams>();
  if (!match) {
    throw new Error(`Match not found. The "$stationSlug" is not existed in query param.`);
  }

  const stationPlayerQuery = useStationPlayerQuery({
    variables: { stationSlug: match.params.slug },
    fetchPolicy: 'network-only',
  });

  const currentPlayingSongUrl = stationPlayerQuery.data?.playingSongs?.[0]?.url;

  const [fetch, { data, loading, variables }] = useYoutubeVideosLazyQuery({ fetchPolicy: 'cache-first' });

  React.useEffect(() => {
    if (currentPlayingSongUrl && variables?.where.relatedToVideoUrl !== currentPlayingSongUrl) {
      fetch({ variables: { where: { maxResults: 4, relatedToVideoUrl: currentPlayingSongUrl } } });
    }
  }, [currentPlayingSongUrl, fetch, stationPlayerQuery.data, variables]);

  let content: React.ReactNode = null;
  if (data) {
    if (data.youtubeVideos.length === 0) {
      content = <Typography variant="subtitle1">No related songs</Typography>;
    } else {
      content = (
        <>
          <Typography variant="overline">Related songs</Typography>
          <List className={classes.list} disablePadding dense>
            {data.youtubeVideos.map((youtubeVideo) => (
              <RelatedSongItem data={youtubeVideo} key={youtubeVideo.id} />
            ))}
            {loading && (
              <div className={classes.listLoadingItemContainer}>
                <CircularProgress className={classes.listLoadingItemContent} />
              </div>
            )}
          </List>
        </>
      );
    }
  }
  return content ? (
    <Card className={classes.container} elevation={0} square id="playlist-container">
      {content}
    </Card>
  ) : null;
};
