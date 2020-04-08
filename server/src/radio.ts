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
import { EnvVariables } from 'core/config/config.variables';
import { RadioModule } from 'radio/radio.module';

const RADIO_READY_STATE_FILE_PATH = Path.join(__dirname, 'radio.ready');
const REAL_TIME_RADIO_READY_STATE_FILE_PATH = Path.join(__dirname, 'real-time-radio.ready');
Fs.existsSync(RADIO_READY_STATE_FILE_PATH) && Fs.unlinkSync(RADIO_READY_STATE_FILE_PATH);

async function bootstrap() {
  const logger = new Logger('RadioGraphQLService');

  logger.log(`Wait until real time radio service response.`);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require('wait-on')({ resources: [REAL_TIME_RADIO_READY_STATE_FILE_PATH], timeout: 30000 });
  logger.log(`Real time radio service responded.`);

  const app = await NestFactory.create<NestExpressApplication>(RadioModule, {
    // TODO: Production environment???
    cors: { origin: [/localhost:(.*)/] },
  });
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  const port = ConfigService.get(EnvVariables.RADIO_SERVER_PORT);
  await app.listen(port);

  Fs.writeFileSync(RADIO_READY_STATE_FILE_PATH, 'READY');
  logger.log(`Radio GraphQL service successfully started at port ${port}.`);
}
bootstrap();
