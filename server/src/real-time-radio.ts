require('tsconfig-paths/register'); // This line must be placed first
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from 'core/config/config.service';
import { EnvVariables } from 'core/config/config.variables';
import { RealTimeRadioModule } from 'real-time-radio/real-time-radio.module';

async function bootstrap() {
  const logger = new Logger('RadioRealTimeService');
  const app = await NestFactory.create(RealTimeRadioModule);
  const configService = app.get(ConfigService);

  try {
    const graphqlResource = `http://localhost:8000/status`;
    logger.log(`Waiting for ${configService.get(EnvVariables.PRISMA_ENDPOINT)} and ${graphqlResource} to response.`);
    await require('wait-on')({
      resources: [configService.get(EnvVariables.PRISMA_ENDPOINT), graphqlResource],
      timeout: 60000,
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }

  await app.init();
}
bootstrap();
