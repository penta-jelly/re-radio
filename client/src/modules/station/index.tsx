import { Grid, Hidden, Portal, Slide } from '@material-ui/core';
import { TabProps } from '@material-ui/core/Tab';
import React from 'react';
import { MdClose, MdPlaylistAdd } from 'react-icons/md';
import { Fab } from 'components/button/fab';
import { RadioTab, RadioTabs } from 'components/tabs/tabs';
import { useToggle } from 'hooks/use-toggle';
import { AddSong } from './add-song';
import { Header } from './header';
import { HistorySongs } from './history-songs';
import { Player } from './player';
import { Playlist } from './playlist';
import { useStyles } from './styles';

export * from './context';
export * from './create';
export * from './list';

export const StationLayout: React.FC = () => {
  const classes = useStyles();

  const [showAddSong, toggleShowAddSong] = useToggle(false);

  const tabs = React.useMemo<TabProps[]>(
    () => [{ value: 'Playlist' }, { value: 'History' }, { value: 'Favorite' }],
    [],
  );

  const [selectedTab, setSelectedTab] = React.useState<string>(tabs[0].value);

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={4} lg={3}>
        <Grid container className={classes.container}>
          <Grid item xs={12} className={classes.header}>
            <RadioTabs value={selectedTab} onChange={(_, tab) => setSelectedTab(tab)}>
              {tabs.map(({ value, ...tabProps }) => (
                <RadioTab {...tabProps} key={value} value={value} label={value} selected={selectedTab === value} />
              ))}
            </RadioTabs>
          </Grid>
          <Grid item xs={12} className={[classes.content, classes.songsList].join(' ')}>
            {(() => {
              switch (selectedTab) {
                case 'History':
                  return <HistorySongs />;
                default:
                  return <Playlist />;
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
          color: showAddSong ? 'secondary' : 'primary',
          className: classes.fabIcon,
          onClick: toggleShowAddSong,
          id: 'add-song-fab',
          title: 'Add a song',
        }}
      >
        {showAddSong ? <MdClose /> : <MdPlaylistAdd />}
      </Fab>
      <Portal>
        <Slide in={showAddSong} direction="left">
          <div className={classes.addSongContainer}>
            <AddSong />
          </div>
        </Slide>
      </Portal>
    </Grid>
  );
};
