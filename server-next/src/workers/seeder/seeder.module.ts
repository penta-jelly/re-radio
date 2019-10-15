import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from 'radio/user/entities/user-role.entity';
import { User } from 'radio/user/entities/user.entity';
import { DevSeederService } from 'workers/seeder/dev-seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRole])],
  providers: [DevSeederService],
  exports: [DevSeederService],
})
export class SeederModule {}
