/* tslint:disable */
/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_BACKEND_ENDPOINT: string;
  }
}

declare module '*.json' {
  const value: any;
  export default value;
}
