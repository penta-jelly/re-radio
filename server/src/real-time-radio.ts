/* eslint-disable import/first */
/* eslint-disable import/no-unassigned-import */
require('tsconfig-paths').register({ baseUrl: 'lib', paths: {} });
require('source-map-support/register');
/* eslint-enable import/no-unassigned-import */
import Fs from 'fs';
import Path from 'path';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ConfigService } from 'core/config/config.service';
import { RealTimeRadioModule } from 'real-time-radio/real-time-radio.module';
import { EnvVariables } from 'core/config/config.variables';

const REAL_TIME_RADIO_READY_STATE_FILE_PATH = Path.join(__dirname, 'real-time-radio.ready');
Fs.existsSync(REAL_TIME_RADIO_READY_STATE_FILE_PATH) && Fs.unlinkSync(REAL_TIME_RADIO_READY_STATE_FILE_PATH);

async function bootstrap() {
  const logger = new Logger('RealTimeRadioService');
  const app = await NestFactory.create<NestExpressApplication>(RealTimeRadioModule, {});
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  const port = ConfigService.get(EnvVariables.RADIO_REAL_TIME_SERVER_PORT);
  await app.listen(port);

  Fs.writeFileSync(REAL_TIME_RADIO_READY_STATE_FILE_PATH, 'READY');
  logger.log(`Real time radio service successfully started.`);
}
bootstrap();
