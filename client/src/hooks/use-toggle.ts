import React from 'react';

type CallbackFunction = () => void;
export function useToggle(
  initialState: boolean,
): [boolean, CallbackFunction, { on: CallbackFunction; off: CallbackFunction }] {
  const [state, setState] = React.useState(initialState);
  const toggleOn = React.useCallback(() => setState(true), []);
  const toggleOff = React.useCallback(() => setState(false), []);
  const toggle = React.useCallback(() => setState((state) => !state), []);
  return [state, toggle, { on: toggleOn, off: toggleOff }];
}
