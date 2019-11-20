/* eslint-disable import/first */
/* eslint-disable import/no-unassigned-import */
require('tsconfig-paths').register({ baseUrl: 'lib', paths: {} });
require('source-map-support/register');
/* eslint-enable import/no-unassigned-import */
import Path from 'path';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DevSeederService } from 'workers/seeder/dev-seeder.service';
import { WorkersModule } from 'workers/workers.module';

const RADIO_READY_STATE_FILE_PATH = Path.join(__dirname, 'radio.ready');

async function bootstrap() {
  const logger = new Logger('Workers');

  logger.log(`Wait until Graphql service response.`);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require('wait-on')({ resources: [RADIO_READY_STATE_FILE_PATH], timeout: 30000 });
  logger.log(`Graphql service responded.`);

  const app = await NestFactory.create(WorkersModule);

  const args = process.argv.slice(2);

  try {
    if (args.includes('seed')) {
      (await app.get(DevSeederService).shouldSeed()) && (await app.get(DevSeederService).seed());
    } else if (args.includes('seed:song')) {
      await app.get(DevSeederService).seedSongs();
    } else if (args.includes('seed:reset')) {
      await app.get(DevSeederService).reset();
    } else {
      logger.error(
        `Unknown command "${args.join(' ')}". Following workers are supported: \n\t` +
          ` - seed: Seed initial data for to database`,
      );
      process.exit(1);
    }
  } catch (e) {
    console.error(e);
    await app.close();
    process.exit(1);
  } finally {
    await app.close();
    process.exit(0);
  }
}
bootstrap();
