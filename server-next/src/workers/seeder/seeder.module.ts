import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSubModule } from 'core/pub-sub/pub-sub.module';
import { StationTag } from 'radio/station/entities/station-tag.entity';
import { Station } from 'radio/station/entities/station.entity';
import { StationSubscriber } from 'radio/station/station.subscriber';
import { UserRole } from 'radio/user/entities/user-role.entity';
import { User } from 'radio/user/entities/user.entity';
import { UserSubscriber } from 'radio/user/user.subscriber';
import { DevSeederService } from 'workers/seeder/dev-seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRole, Station, StationTag]), PubSubModule],
  providers: [DevSeederService, UserSubscriber, StationSubscriber],
  exports: [DevSeederService],
})
export class SeederModule {}
