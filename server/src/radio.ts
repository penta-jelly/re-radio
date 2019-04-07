import { NestFactory } from '@nestjs/core';
import 'source-map-support/register';
import { RadioModule } from './radio/radio.module';

async function bootstrap() {
  const app = await NestFactory.create(RadioModule);
  await app.listen(8000);
}
bootstrap();
