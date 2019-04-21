declare module 'graphql-upload' {
  import { ReadStream } from 'fs';

  export interface FileUpload {
    filename: string;
    mimetype: string;
    encoding: string;
    createReadStream(): ExtendedReadStream;
  }

  export interface ExtendedReadStream extends ReadStream {
    truncated: boolean;
  }
}
