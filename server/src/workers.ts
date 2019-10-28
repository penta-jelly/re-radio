require('tsconfig-paths/register'); // This line must be placed first
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from 'core/config/config.service';
import { EnvVariables } from 'core/config/config.variables';
import { DevSeederService } from 'workers/seeder/dev-seeder.service';
import { WorkersModule } from 'workers/workers.module';

async function bootstrap() {
  const logger = new Logger('Workers');
  const app = await NestFactory.create(WorkersModule);

  const args = process.argv.slice(2);

  const radioServerUrl = `http://localhost:${app.get(ConfigService).get(EnvVariables.RADIO_SERVER_PORT)}/status`;
  logger.log(`Wait until URL ${radioServerUrl} response.`);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require('wait-on')({ resources: [radioServerUrl], timeout: 120000 });
  logger.log(`URL ${radioServerUrl} responded.`);

  try {
    if (args.includes('seed')) {
      (await app.get(DevSeederService).shouldSeed()) && (await app.get(DevSeederService).seed());
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
