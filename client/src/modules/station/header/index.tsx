import { Card, CircularProgress, Typography } from '@material-ui/core';
import { useRouter } from 'hooks/use-router';
import { useStationQuery } from 'operations';
import React from 'react';
import { useStyles } from './styles';

interface RouteParams {
  slug: string;
}

export const Header: React.FC = props => {
  const classes = useStyles();
  const { match } = useRouter<RouteParams>();
  const { data, loading, error } = useStationQuery({ variables: { slug: match.params.slug } });

  const content = React.useMemo<React.ReactNode>(() => {
    if (error) {
      return error.message;
    }
    if (loading) {
      return <CircularProgress />;
    }
    return data && data.station && data.station.name;
  }, [data, loading, error]);

  return (
    <Card className={classes.container} elevation={0} square>
      <Typography variant="subtitle1">{content}</Typography>
    </Card>
  );
};
