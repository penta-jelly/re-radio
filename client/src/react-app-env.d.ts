/* eslint-disable */
/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_SERVICE_HOST: string;
    REACT_APP_SERVICE_PORT: string;
    REACT_APP_JOIN_STATION_INTERVAL: string;
  }
}

declare interface NodeModule {
  hot: {
    accept(path?: string, fn: () => void, callback?: () => void): void;
  };
}

declare module '*.json' {
  const value: any;
  export default value;
}
