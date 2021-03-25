import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { StationsQuery } from 're-radio-common/lib/operations';
import { StationItem } from './item';

interface Props {
  data?: StationsQuery;
  empty?: React.ReactNode;
  itemClassName?: string;
}

export const StationsList: React.FC<Props> = ({ data, empty, itemClassName }) => {
  return (
    <>
      {data &&
        (data.stations.length === 0 ? (
          <Grid item xs={12}>
            <Typography>{empty || 'No stations'}</Typography>
          </Grid>
        ) : (
          data.stations.map(
            (station) => station && <StationItem key={station.id} data={station} className={itemClassName} />,
          )
        ))}
    </>
  );
};
