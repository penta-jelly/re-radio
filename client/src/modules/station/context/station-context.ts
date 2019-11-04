import React from 'react';
import * as StationLayout from 'containers/layout';

export interface StationContext {
  // Mute
  mute: boolean;
  setMute: React.Dispatch<React.SetStateAction<StationContext['mute']>>;

  // Chat box
  chatBox: {
    hidden: boolean;
  };
  setChatBoxState: React.Dispatch<React.SetStateAction<StationContext['chatBox']>>;

  // Drawer
  drawer: StationLayout.DrawerProps;
  setDrawerState: React.Dispatch<React.SetStateAction<StationContext['drawer']>>;
}

const defaultFn = () => {};
const defaultState: StationContext = {
  // Mute
  mute: false,
  setMute: defaultFn,

  // Chat box
  chatBox: {
    hidden: false,
  },
  setChatBoxState: defaultFn,

  // Drawer
  drawer: { open: true, collapsed: true },
  setDrawerState: defaultFn,
};

export const StationContext = React.createContext<StationContext>(defaultState);

export function useStationContextState(): StationContext {
  const [mute, setMute] = React.useState<StationContext['mute']>(defaultState.mute);

  const [chatBox, setChatBoxState] = React.useState<StationContext['chatBox']>(defaultState.chatBox);

  const [drawer, setDrawerState] = React.useState<StationContext['drawer']>(defaultState.drawer);

  return {
    mute,
    setMute,
    chatBox,
    setChatBoxState,
    drawer,
    setDrawerState,
  };
}
