/* eslint-disable import/first */
/* eslint-disable import/no-unassigned-import */
require('source-map-support/register');
/* eslint-enable import/no-unassigned-import */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ConfigService } from './core/config/config.service';
import { EnvVariables } from './core/config/config.variables';
import { RadioModule } from './radio/radio.module';

export async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(RadioModule, {
    // TODO: Production environment???
    cors: { origin: [/localhost:(.*)/] },
  });
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  const logger = new Logger('RadioGraphQLService');
  logger.log(`Wait until real time radio service response.`);
  const realTimeServer = {
    port: app.get(ConfigService).get(EnvVariables.RADIO_REAL_TIME_SERVER_PORT),
    host: app.get(ConfigService).get(EnvVariables.RADIO_REAL_TIME_SERVER_HOST),
  };
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require('wait-on')({
    resources: [`http://${realTimeServer.host}:${realTimeServer.port}/status`],
    timeout: 30000,
  });
  logger.log(`Real time radio service responded.`);

  const radioServer = {
    port: app.get(ConfigService).get(EnvVariables.RADIO_SERVER_PORT),
    host: app.get(ConfigService).get(EnvVariables.RADIO_SERVER_HOST),
  };
  await app.listen(radioServer.port, radioServer.host);

  logger.log(`Radio GraphQL service successfully started at port ${radioServer.port}.`);
}
