import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { UsersModule } from 'radio/users/users.module';
import { SeederService } from './Seeder.service';

@Module({
  imports: [PrismaModule, UsersModule],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
