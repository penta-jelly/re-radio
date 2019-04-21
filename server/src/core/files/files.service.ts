import { Injectable } from '@nestjs/common';
import * as Fs from 'fs';
import { ExtendedReadStream } from 'graphql-upload';
import * as Path from 'path';

@Injectable()
export class FilesService {
  async storeFile(stream: ExtendedReadStream, filename: string): Promise<ReturnType> {
    // TODO: Store file on some cloud storage instead of the local disk
    return this.storeFileToLocalDisk(stream, filename);
  }

  async storeFileToLocalDisk(stream: ExtendedReadStream, filename: string): Promise<ReturnType> {
    const id = `${Date.now()}`;
    const hashedFilename = `${id}-${filename}`;
    const storagePath = this.getImagesLocalStoragePath();
    const path = Path.join(storagePath, hashedFilename);
    return new Promise((resolve, reject) =>
      stream
        .on('error', error => {
          if (stream.truncated) {
            // Delete the truncated file.
            Fs.unlinkSync(path);
          }
          reject(error);
        })
        .pipe(Fs.createWriteStream(path))
        .on('error', error => reject(error))
        .on('finish', () => resolve({ id, path, hashedFilename })),
    );
  }

  public getImagesLocalStoragePath() {
    const storagePath = Path.join(process.cwd(), 'storage');
    if (!Fs.existsSync(storagePath)) {
      Fs.mkdirSync(storagePath);
    }
    const imagesStoragePath = Path.join(storagePath, 'images');
    if (!Fs.existsSync(imagesStoragePath)) {
      Fs.mkdirSync(imagesStoragePath);
    }
    return imagesStoragePath;
  }
}

interface ReturnType {
  id: string;
  path: string;
  hashedFilename: string;
}
