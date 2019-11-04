// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace WsEvent {
  export enum Type {
    CONNECTED = 'WsEvent/CONNECTED',
    DISCONNECTED = 'WsEvent/DISCONNECTED',
  }
  export interface ConnectedPayload {
    connectionParams: object;
  }

  export interface DisconnectedPayload {
    connectionParams: object;
  }
}
