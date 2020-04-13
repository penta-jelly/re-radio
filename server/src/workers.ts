/* eslint-disable import/first */
/* eslint-disable import/no-unassigned-import */
require('source-map-support/register');
/* eslint-enable import/no-unassigned-import */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { DevSeederService } from './workers/seeder/dev-seeder.service';
import { WorkersModule } from './workers/workers.module';
import { ConfigService } from './core/config/config.service';
import { EnvVariables } from './core/config/config.variables';

export type Worker = 'seed' | 'seed:song' | 'seed:reset';
export const DEFAULT_WORKERS: Worker[] = ['seed', 'seed:song', 'seed:reset'];

export async function bootstrap(worker: Worker) {
  const app = await NestFactory.create(WorkersModule);
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  const logger = new Logger('Workers');
  logger.log(`Wait until Graphql service response.`);
  const radioServer = {
    port: app.get(ConfigService).get(EnvVariables.RADIO_REAL_TIME_SERVER_PORT),
    host: app.get(ConfigService).get(EnvVariables.RADIO_REAL_TIME_SERVER_HOST),
  };
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require('wait-on')({
    resources: [`http://${radioServer.host}:${radioServer.port}/status`],
    timeout: 30000,
  });
  logger.log(`Graphql service responded.`);

  try {
    switch (worker) {
      case 'seed':
        (await app.get(DevSeederService).shouldSeed()) && (await app.get(DevSeederService).seed());
        break;
      case 'seed:song':
        await app.get(DevSeederService).seedSongs();
        break;
      case 'seed:reset':
        await app.get(DevSeederService).reset();
        break;
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
