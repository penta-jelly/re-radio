import { Card, CircularProgress, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useStationQuery } from 'operations';
import { useStyles } from './styles';

interface RouteParams {
  slug: string;
}

export const Header: React.FC = props => {
  const classes = useStyles();
  const params = useParams<RouteParams>();
  const { data, error } = useStationQuery({ variables: { slug: params.slug } });

  const content = React.useMemo<React.ReactNode>(() => {
    if (data) {
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
