require('tsconfig-paths/register'); // This line must be placed first
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { RadioModule } from 'radio/radio.module';

async function bootstrap() {
  const logger = new Logger('RadioGraphQLService');
  const app = await NestFactory.create<NestExpressApplication>(RadioModule);
  await app.listen(8000);
  logger.log('RadioGraphQLService successfully started');
}
bootstrap();
