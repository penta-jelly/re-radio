require('tsconfig-paths/register'); // This line must be placed first
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { RadioModule } from 'radio/radio.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(RadioModule);
  await app.listen(8000);
}
bootstrap();
