/* eslint-disable import/first */
/* eslint-disable import/no-unassigned-import */
require('source-map-support/register');
require('moment-duration-format');
/* eslint-enable import/no-unassigned-import */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ConfigService } from './core/config/config.service';
import { RealTimeRadioModule } from './real-time-radio/real-time-radio.module';
import { EnvVariables } from './core/config/config.variables';

export async function bootstrap() {
  const logger = new Logger('RealTimeRadioService');
  const app = await NestFactory.create<NestExpressApplication>(RealTimeRadioModule, {});
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  const realTimeServer = {
    port: app.get(ConfigService).get(EnvVariables.RADIO_REAL_TIME_SERVER_PORT),
    host: app.get(ConfigService).get(EnvVariables.RADIO_REAL_TIME_SERVER_HOST),
  };
  await app.listen(realTimeServer.port, realTimeServer.host);

  logger.log(`Real time radio service successfully started.`);
}
