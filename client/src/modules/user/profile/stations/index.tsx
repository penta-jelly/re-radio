import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { PageLoader } from '../../../../components/page-loader';
import { StationOrderByInput, useStationsQuery } from '../../../../graphql';
import { StationsList } from '../../../station';
import { useStyles } from './styles';

interface Props {
  username: string;
  editable: boolean;
}

export const UserProfileStations: React.FC<Props> = ({ username, editable }) => {
  const classes = useStyles();
  const { loading, error, data } = useStationsQuery({
    variables: {
      first: 25,
      skip: 0,
      orderBy: StationOrderByInput.CreatedAtDesc,
      where: { owner: { username } },
    },
  });
  if (loading) {
    return <PageLoader />;
  }
  if (error) {
    return <Typography color="error">{error}</Typography>;
  }
  return (
    <div className={classes.root}>
      <Typography gutterBottom component="h3" variant="h5" className={classes.sectionTitle}>
        {editable ? 'Your stations' : `Stations`}
      </Typography>
      <Grid container className={classes.list} spacing={2}>
        <StationsList data={data} itemClassName={classes.card} />
      </Grid>
    </div>
  );
};
