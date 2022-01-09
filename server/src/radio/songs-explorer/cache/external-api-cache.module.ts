import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalApiCache } from './entities/external-api-cache.entity';
import { ExternalApiCacheService } from './external-api-cache.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExternalApiCache])],
  providers: [ExternalApiCacheService],
  exports: [ExternalApiCacheService],
})
export class ExternalApiCacheModule {}
