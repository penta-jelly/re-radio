require('tsconfig-paths/register'); // This line must be placed first
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { execSync } from 'child_process';
import { ConfigService } from 'core/config/config.service';
import { EnvVariables } from 'core/config/config.variables';
import { PrismaModule } from 'prisma/prisma.module';

async function bootstrap() {
  const logger = new Logger('Prisma');
  const app = await NestFactory.create(PrismaModule);
  const configService = app.get(ConfigService);

  const args = process.argv.slice(2);

  logger.log(`Waiting for ${configService.get(EnvVariables.PRISMA_ENDPOINT)} to response.`);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require('wait-on')({ resources: [configService.get(EnvVariables.PRISMA_ENDPOINT)], timeout: 30000 });

  const script = `npx prisma ${args.join(' ')}`;
  logger.log(`Executing script "${script}"`);
  execSync(script, { stdio: 'inherit' });
}
bootstrap();
