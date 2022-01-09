import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

interface Props {
  username: string;
  editable: boolean;
}

export const UserProfileSongs: React.FC<Props> = ({ username, editable }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography gutterBottom component="h3" variant="h5" className={classes.sectionTitle}>
        {editable ? 'Your songs' : `Songs`}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography color="error">Not supported yet</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
