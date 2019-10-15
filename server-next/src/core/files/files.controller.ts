import { Controller, Get, Logger, NotFoundException, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import * as Fs from 'fs';
import * as Path from 'path';
import { FilesService } from './files.service';

@Controller()
export class FilesController {
  private readonly logger = new Logger(FilesController.name);
  constructor(private readonly filesService: FilesService) {}

  @Get('images/:hash')
  async getImage(@Param('hash') hash: string, @Res() res: Response) {
    const path = Path.join(this.filesService.getImagesLocalStoragePath(), hash);
    if (!Fs.existsSync(path)) {
      this.logger.verbose(`Could not locate ${path}`);
      throw new NotFoundException(`Could not locate ${hash}`);
    }
    return res.sendFile(hash, { root: this.filesService.getImagesLocalStoragePath() });
  }
}
