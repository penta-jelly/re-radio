import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'radio/user/user.module';
import { StationTag } from './entities/station-tag.entity';
import { Station } from './entities/station.entity';
import { StationTagResolver } from './resolvers/station-tag.resolver';
import { StationResolver } from './resolvers/station.resolver';
import { StationTagService } from './services/station-tag.service';
import { StationService } from './services/station.service';

@Module({
  imports: [TypeOrmModule.forFeature([Station, StationTag]), forwardRef(() => UserModule)],
  providers: [StationService, StationTagService, StationResolver, StationTagResolver],
  exports: [StationService, StationTagService],
})
export class StationModule {}
