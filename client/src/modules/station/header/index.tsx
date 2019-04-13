import React from 'react';
import { Typography, Card, CircularProgress } from '@material-ui/core';
import { useStyles } from './styles';
import { RouteComponentProps, withRouter } from 'react-router';
import { useStationQuery } from '../../../graphql';

interface RouteParams {
  slug: string;
}

const BaseHeader: React.FC<RouteComponentProps<RouteParams>> = props => {
  const classes = useStyles();
  const { data, loading, error } = useStationQuery({ variables: { slug: props.match.params.slug } });

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

export const Header = withRouter(BaseHeader);
