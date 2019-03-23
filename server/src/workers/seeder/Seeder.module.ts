import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { SeederService } from './Seeder.service';

@Module({
  imports: [PrismaModule],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
