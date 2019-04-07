import { NestFactory } from '@nestjs/core';
import 'source-map-support/register';
import { RealTimeRadioModule } from './real-time-radio/real-time-radio.module';

async function bootstrap() {
  const app = await NestFactory.create(RealTimeRadioModule);
  await app.init();
}
bootstrap();
