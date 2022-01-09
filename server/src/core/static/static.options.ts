import Path from 'path';
import Fs from 'fs';
import { ServeStaticModuleOptionsFactory, ServeStaticModuleOptions } from '@nestjs/serve-static';

export class StaticOptions implements ServeStaticModuleOptionsFactory {
  createLoggerOptions(): ServeStaticModuleOptions[] {
    const baseOption: Partial<ServeStaticModuleOptions> = {
      serveStaticOptions: {
        setHeaders: (res) => {
          res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
        },
      },
    };
    const buildPath = Path.join(process.cwd(), 'static');
    const fallbackPath = Path.join(process.cwd(), '..', 'client', 'build');
    if (Fs.existsSync(buildPath)) {
      return [{ ...baseOption, rootPath: buildPath }];
    } else if (Fs.existsSync(fallbackPath)) {
      return [{ ...baseOption, rootPath: fallbackPath }];
    }
    return [];
  }
}
