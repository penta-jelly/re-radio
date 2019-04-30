import { Card, CircularProgress, Typography } from '@material-ui/core';
import React from 'react';

import { useStationQuery } from 'operations';
import { useRouter } from 'hooks/useRouter';

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
    <Card className={classes.container}>
      <Typography variant="subtitle1">{content}</Typography>
    </Card>
  );
};
