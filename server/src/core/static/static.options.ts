import Path from 'path';
import Fs from 'fs';
import { ServeStaticModuleOptionsFactory, ServeStaticModuleOptions } from '@nestjs/serve-static';

export class StaticOptions implements ServeStaticModuleOptionsFactory {
  createLoggerOptions(): ServeStaticModuleOptions[] {
    const baseOption: Partial<ServeStaticModuleOptions> = {};
    const buildPath = Path.join(process.cwd(), 'static');
    const fallbackPath = Path.join(process.cwd(), '..', 'client', 'build');
    if (Fs.existsSync(buildPath)) {
      return [{ ...baseOption, rootPath: buildPath }];
    }
    return [{ ...baseOption, rootPath: fallbackPath }];
  }
}
