import { Card, CircularProgress, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useStationQuery, useOnStationChangedSubscription } from 'operations';
import { useStyles } from './styles';

interface RouteParams {
  slug: string;
}

export const Header: React.FC = props => {
  const classes = useStyles();
  const params = useParams<RouteParams>();
  const { data, error, updateQuery } = useStationQuery({ variables: { slug: params.slug } });

  useOnStationChangedSubscription({
    variables: { where: { slug: params.slug } },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      if (!data) return;
      const { onStationChanged } = data;
      if (!onStationChanged) return;
      const { entity } = onStationChanged;
      updateQuery(prev => {
        const { onlineUserIds } = entity;
        if (!prev || !prev.station) return prev;
        return { ...prev, station: { ...prev.station, onlineUserIds } };
      });
    },
  });

  const content = React.useMemo<React.ReactNode>(() => {
    if (data && data.station) {
      return (
        <>
          {data.station.name} - Online users: {data.station.onlineUserIds.length}
        </>
      );
    } else if (error) {
      return error.message;
    }
    return <CircularProgress />;
  }, [data, error]);

  return (
    <Card className={classes.container} elevation={0} square>
      <Typography variant="subtitle1">{content}</Typography>
    </Card>
  );
};
