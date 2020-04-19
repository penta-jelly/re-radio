import React from 'react';
import * as StationLayout from 'containers/layout';

export interface StationContext {
  // Mute
  muted: boolean;
  setMuted: (value: boolean) => void;

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
  selectedTab: 'playlist' | 'history' | 'favorite';
  setSelectedTab(tab: StationContext['selectedTab']): void;
}

const defaultFn = () => {};
const defaultState: StationContext = {
  // Mute
  muted: false,
  setMuted: defaultFn,

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
  tabs: ['playlist', 'history', 'favorite'],
  selectedTab: 'playlist',
  setSelectedTab: defaultFn,
};

export const StationContext = React.createContext<StationContext>(defaultState);

export function useStationContextStateProvider(): StationContext {
  const [muted, setMuted] = React.useState<StationContext['muted']>(defaultState.muted);

  const [chatBox, setChatBoxState] = React.useState<StationContext['chatBox']>(defaultState.chatBox);

  const [drawer, setDrawerState] = React.useState<StationContext['drawer']>(defaultState.drawer);

  const [addSongDialog, setAddSongDialogState] = React.useState<StationContext['addSongDialog']>(
    defaultState.addSongDialog,
  );

  const [selectedTab, setSelectedTab] = React.useState<StationContext['selectedTab']>(defaultState.selectedTab);

  return {
    muted,
    setMuted,
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
}

export function useStationContextState(): StationContext {
  return React.useContext(StationContext);
}
