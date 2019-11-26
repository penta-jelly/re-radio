import { Card, CircularProgress, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useStationQuery } from 'operations';
import { useMemorizedValue } from 'hooks/use-memorized-value';
import { useStyles } from './styles';

interface RouteParams {
  slug: string;
}

export const Header: React.FC = props => {
  const classes = useStyles();
  const params = useParams<RouteParams>();
  const { data, error } = useStationQuery({ variables: { slug: params.slug } });

  const [station] = useMemorizedValue(data && data.station);

  const content = React.useMemo<React.ReactNode>(() => {
    if (station) {
      return (
        <>
          {station.name} - Online users: {station.onlineUserIds.length}
        </>
      );
    } else if (error) {
      return error.message;
    }
    return <CircularProgress />;
  }, [station, error]);

  return (
    <Card className={classes.container} elevation={0} square>
      <Typography variant="subtitle1">{content}</Typography>
    </Card>
  );
};
