import React from 'react';
import * as StationLayout from 'containers/layout';
import { useLocalStorage } from 'hooks/use-local-storage';

export interface StationContext {
  player: {
    // Mute
    muted: boolean;
    setMuted: (value: boolean) => void;
  };

  // Chat box
  chatBox: {
    hidden: boolean;
  };
  setChatBoxState: (value: StationContext['chatBox']) => void;

  // Drawer
  drawer: StationLayout.DrawerProps;
  setDrawerState: (value: StationLayout.DrawerProps) => void;

  // Add song
  addSongDialog: {
    hidden: boolean;
  };
  setAddSongDialogState: (value: StationContext['addSongDialog']) => void;

  // Tabs
  tabs: StationContext['selectedTab'][];
  selectedTab: 'playlist' | 'history' | 'trending';
  setSelectedTab(tab: StationContext['selectedTab']): void;
}

const defaultFn = () => {};
const defaultState: StationContext = {
  player: {
    // Mute
    muted: false,
    setMuted: defaultFn,
  },

  // Chat box
  chatBox: {
    hidden: false,
  },
  setChatBoxState: defaultFn,

  // Drawer
  drawer: { open: true, collapsed: true },
  setDrawerState: defaultFn,

  // Add song
  addSongDialog: {
    hidden: true,
  },
  setAddSongDialogState: defaultFn,

  // Tabs
  tabs: ['playlist', 'history', 'trending'],
  selectedTab: 'playlist',
  setSelectedTab: defaultFn,
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const StationContext = React.createContext<StationContext>(defaultState);

export function useStationContextStateProvider(): StationContext {
  const [muted, setMuted] = useLocalStorage<StationContext['player']['muted']>('muted', defaultState.player.muted);

  const [chatBox, setChatBoxState] = React.useState<StationContext['chatBox']>(defaultState.chatBox);

  const [drawer, setDrawerState] = React.useState<StationContext['drawer']>(defaultState.drawer);

  const [addSongDialog, setAddSongDialogState] = React.useState<StationContext['addSongDialog']>(
    defaultState.addSongDialog,
  );

  const [selectedTab, setSelectedTab] = useLocalStorage<StationContext['selectedTab']>(
    'selectedStationTab',
    defaultState.selectedTab,
  );

  return React.useMemo(() => {
    return {
      player: { muted, setMuted },
      chatBox,
      setChatBoxState,
      drawer,
      setDrawerState,
      addSongDialog,
      setAddSongDialogState,
      tabs: defaultState.tabs,
      selectedTab,
      setSelectedTab,
    };
  }, [addSongDialog, chatBox, drawer, muted, selectedTab, setMuted, setSelectedTab]);
}

export function useStationContextState(): StationContext {
  return React.useContext(StationContext);
}
