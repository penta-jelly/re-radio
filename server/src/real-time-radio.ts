/* eslint-disable import/first */
/* eslint-disable import/no-unassigned-import */
require('tsconfig-paths').register({ baseUrl: 'lib', paths: {} });
require('source-map-support/register');
/* eslint-enable import/no-unassigned-import */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from 'core/config/config.service';
import { RealTimeRadioModule } from 'real-time-radio/real-time-radio.module';
import { EnvVariables } from 'core/config/config.variables';

async function bootstrap() {
  const logger = new Logger('RealTimeRadioService');
  const app = await NestFactory.create<NestExpressApplication>(RealTimeRadioModule, {
    logger: ConfigService.getLogLevels(),
  });

  const port = ConfigService.get(EnvVariables.RADIO_REAL_TIME_SERVER_PORT);
  await app.listen(port);
  logger.log(`Real time radio service successfully started.`);
}
bootstrap();
