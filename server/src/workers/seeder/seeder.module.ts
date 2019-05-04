import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { SeederService } from './seeder.service';

@Module({
  imports: [PrismaModule],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
