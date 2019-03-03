import { NestFactory } from '@nestjs/core';
import { SeederService } from 'workers/seeder/Seeder.service';
import { WorkersModule } from './workers.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Workers');
  const app = await NestFactory.create(WorkersModule);

  const args = process.argv.slice(2);

  if (args.includes('seed')) {
    await app.get(SeederService).seed();
  } else {
    logger.error(
      `Unknown command "${args.join(' ')}". Follow workers are supported: \n\t` +
        ` - seed: Seed initial data for to database using Prisma client API`,
    );
    process.exit(1);
  }
}
bootstrap();
