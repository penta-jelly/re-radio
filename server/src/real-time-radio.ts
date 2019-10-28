require('tsconfig-paths/register'); // This line must be placed first
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from 'core/config/config.service';
import { EnvVariables } from 'core/config/config.variables';
import { RealTimeRadioModule } from 'real-time-radio/real-time-radio.module';

async function bootstrap() {
  const logger = new Logger('RealTimeRadioGraphQLService');
  const app = await NestFactory.create<NestExpressApplication>(RealTimeRadioModule);

  const radioServerUrl = `http://localhost:${app.get(ConfigService).get(EnvVariables.RADIO_SERVER_PORT)}/status`;
  logger.log(`Wait until URL ${radioServerUrl} response.`);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require('wait-on')({ resources: [radioServerUrl], timeout: 120000 });
  logger.log(`URL ${radioServerUrl} responded.`);

  await app.init();
  logger.log(`Real time radio service successfully started.`);
}
bootstrap();
