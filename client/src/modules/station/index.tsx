import { Grid, Hidden, Portal, Slide, Tab, Tabs } from '@material-ui/core';
import { TabProps } from '@material-ui/core/Tab';
import { Fab } from 'components/button/fab';
import { useToggle } from 'hooks/use-toggle';
import React from 'react';
import { MdClose, MdPlaylistAdd } from 'react-icons/md';
import { AddSong } from './add-song';
import { Header } from './header';
import { Player } from './player';
import { Playlist } from './playlist';
import { useStyles } from './styles';

export * from './context';
export * from './list';
export * from './create';

export const StationLayout: React.FC<{}> = () => {
  const classes = useStyles();

  const [showAddSong, toggleShowAddSong] = useToggle(false);

  const tabs = React.useMemo<TabProps[]>(
    () => [{ value: 'Playlist' }, { value: 'History' }, { value: 'Favourite' }],
    [],
  );

  const [selectedTab, setSelectedTab] = React.useState<string>(tabs[0].value);

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={4} lg={3}>
        <Grid container className={classes.container}>
          <Grid item xs={12} className={classes.header}>
            <Tabs value={selectedTab} onChange={(_, tab) => setSelectedTab(tab)}>
              {tabs.map(({ value }) => (
                <Tab key={value} value={value} label={value} selected={selectedTab === value} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={12} className={classes.content}>
            <Playlist />
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
