import { Injectable } from '@nestjs/common';
import { ConfigService } from 'core/config/config.service';
import { EnvVariables } from 'core/config/config.variables';
import { Prisma } from './prisma.binding';

@Injectable()
export class PrismaService extends Prisma {
  constructor(private readonly config: ConfigService) {
    super({
      endpoint: `http://${config.get(EnvVariables.PRISMA_HOST)}:${config.get(EnvVariables.PRISMA_PORT)}`,
      debug: false,
    });
  }

  isViolatedUniqueConstraint(error: Error): boolean {
    if (typeof error.message === 'string' && error.message.includes('A unique constraint would be violated')) {
      return true;
    }
    return false;
  }
}
