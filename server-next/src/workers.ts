require('tsconfig-paths/register'); // This line must be placed first
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DevSeederService } from 'workers/seeder/dev-seeder.service';
import { WorkersModule } from 'workers/workers.module';

async function bootstrap() {
  const logger = new Logger('Workers');
  const app = await NestFactory.create(WorkersModule);

  const args = process.argv.slice(2);

  if (args.includes('seed')) {
    await app.get(DevSeederService).seed();
  } else if (args.includes('seed:reset')) {
    await app.get(DevSeederService).reset();
  } else {
    logger.error(
      `Unknown command "${args.join(' ')}". Following workers are supported: \n\t` +
        ` - seed: Seed initial data for to database`,
    );
    process.exit(1);
  }
}
bootstrap();
