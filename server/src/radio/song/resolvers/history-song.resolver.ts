import { Args, Query, Resolver, ResolveProperty } from '@nestjs/graphql';
import { Root } from 'type-graphql';
import { PaginationInput } from 'core/graphql/input/pagination';
import { StationService } from 'radio/station/services/station.service';
import { StationDTO } from 'radio/station/dto/station.dto';
import { SongService } from '../services/song.service';
import { HistorySongFindAllWhereInput } from '../song.input';
import { HistorySongDTO } from '../dto/song.dto';

@Resolver(of => HistorySongDTO)
export class HistorySongResolver {
  constructor(private readonly songService: SongService, private readonly stationService: StationService) {}

  @ResolveProperty(returns => StationDTO)
  async station(@Root() song: HistorySongDTO) {
    return this.stationService.findOneOrFail({ where: { slug: song.stationSlug } });
  }

  @Query(returns => [HistorySongDTO])
  async historySongs(
    @Args({ name: 'pagination', nullable: true, type: () => PaginationInput }) pagination: PaginationInput,
    @Args({ name: 'where', type: () => HistorySongFindAllWhereInput })
    where: HistorySongFindAllWhereInput,
  ) {
    const entities = await this.songService.findHistorySongs(where.stationSlug, pagination);
    return entities.map(entity => ({ ...entity, id: entity.url }));
  }
}
