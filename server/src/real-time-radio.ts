require('tsconfig-paths/register'); // This line must be placed first
import { NestFactory } from '@nestjs/core';
import { RealTimeRadioModule } from 'real-time-radio/real-time-radio.module';

async function bootstrap() {
  const app = await NestFactory.create(RealTimeRadioModule);
  await app.init();
}
bootstrap();
