import { Grid, Hidden, Portal, Slide } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdClose, MdPlaylistAdd } from 'react-icons/md';
import { RadioTab, RadioTabs } from 'components/tabs/tabs';
import { Fab } from 'components/button/fab';
import { AddSong } from './add-song';
import { useStationContextState } from './context';
import { Header } from './header';
import { HistorySongs } from './history-songs';
import { Player } from './player';
import { Playlist } from './playlist';
import { RelatedSongs } from './related-songs';
import { useStyles } from './styles';
import { TrendingSongs } from './trending-songs';

export * from './context';
export * from './create';
export * from './list';

export const StationLayout: React.FC = () => {
  const classes = useStyles();

  const { t } = useTranslation('stations');
  const { tabs, selectedTab, setSelectedTab, addSongDialog, setAddSongDialogState } = useStationContextState();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={4} lg={3}>
        <Grid container className={classes.container}>
          <Grid item xs={12} className={classes.header}>
            <RadioTabs value={selectedTab} onChange={(_, tab) => setSelectedTab(tab)}>
              {tabs.map((tab) => (
                <RadioTab key={tab} value={tab} label={t(tab)} selected={selectedTab === tab} />
              ))}
            </RadioTabs>
          </Grid>
          <Grid item xs={12} className={[classes.content, classes.songsList].join(' ')}>
            {(() => {
              switch (selectedTab) {
                case 'history':
                  return <HistorySongs />;
                case 'trending':
                  return <TrendingSongs />;
                default:
                  return (
                    <>
                      <Playlist />
                      <RelatedSongs />
                    </>
                  );
              }
            })()}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <Grid container className={classes.container}>
          <Hidden xsDown>
            <Grid item xs={12} className={classes.header}>
              <Header />
            </Grid>
          </Hidden>
          <Grid item xs={12} className={classes.content}>
            <Player />
          </Grid>
        </Grid>
      </Grid>
      <Fab
        muiProps={{
          color: addSongDialog.hidden ? 'primary' : 'secondary',
          className: classes.fabIcon,
          onClick: () => setAddSongDialogState({ hidden: !addSongDialog.hidden }),
          id: 'add-song-fab',
          title: 'Add a song',
        }}
      >
        {addSongDialog.hidden ? <MdPlaylistAdd /> : <MdClose />}
      </Fab>
      <Portal>
        <Slide in={!addSongDialog.hidden} direction="left">
          <div className={classes.addSongContainer}>
            <AddSong />
          </div>
        </Slide>
      </Portal>
    </Grid>
  );
};
