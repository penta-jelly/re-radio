require('tsconfig-paths/register'); // This line must be placed first
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from 'core/config/config.service';
import { EnvVariables } from 'core/config/config.variables';
import { RadioModule } from 'radio/radio.module';

async function bootstrap() {
  const logger = new Logger('RadioGraphQLService');
  const app = await NestFactory.create<NestExpressApplication>(RadioModule);
  const configService = app.get(ConfigService);

  try {
    logger.log(`Waiting for ${configService.get(EnvVariables.PRISMA_ENDPOINT)} to response.`);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    await require('wait-on')({ resources: [configService.get(EnvVariables.PRISMA_ENDPOINT)], timeout: 60000 });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }

  await app.listen(8000);
}
bootstrap();
