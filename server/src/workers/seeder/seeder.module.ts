import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { SeederService } from './seeder.service';
import { StressTestSeederService } from './seeder.stress-test.service';

@Module({
  imports: [PrismaModule],
  providers: [SeederService, StressTestSeederService],
  exports: [SeederService, StressTestSeederService],
})
export class SeederModule {}
