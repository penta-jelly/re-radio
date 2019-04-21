import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import 'source-map-support/register';
import { RadioModule } from './radio/radio.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(RadioModule);
  await app.listen(8000);
}
bootstrap();
