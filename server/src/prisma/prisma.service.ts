import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';
import { ConfigService } from 'core/config/config.service';
import { EnvVariables } from 'core/config/config.variables';

@Injectable()
export class PrismaService extends Prisma {
  constructor(private readonly config: ConfigService) {
    super({
      endpoint: `http://${config.get(EnvVariables.PRISMA_HOST)}:${config.get(EnvVariables.PRISMA_PORT)}`,
      debug: false,
    });
  }
}
