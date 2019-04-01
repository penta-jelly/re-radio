import { Grid } from '@material-ui/core';
import React from 'react';
import { AddSong } from './add-song';
import { ChatBox } from './chat-box';
import { Header } from './header';
import { Player } from './player';
import { Playlist } from './playlist';
import { useStyles } from './styles';

export const StationLayout: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item xs={12} className={classes.header}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Grid container className={classes.content} spacing={2}>
          <Grid item xs={3}>
            <ChatBox />
          </Grid>
          <Grid item xs={3}>
            <Playlist />
          </Grid>
          <Grid item xs={6} className={classes.rightLayout}>
            <Grid container className={classes.rightContainer} spacing={2}>
              <Grid item xs={12}>
                <Player />
              </Grid>
              <Grid item xs={12}>
                <AddSong />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
