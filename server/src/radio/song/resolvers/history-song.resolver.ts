import { Args, Query, ResolveField, Resolver, Root, Int } from '@nestjs/graphql';
import { PaginationInput } from '../../../core/graphql/input/pagination';
import { StationDTO } from '../../station/dto/station.dto';
import { StationService } from '../../station/services/station.service';
import { HistorySongDTO } from '../dto/song.dto';
import { SongService } from '../services/song.service';
import { HistorySongFindAllWhereInput } from '../song.input';

@Resolver((of) => HistorySongDTO)
export class HistorySongResolver {
  constructor(private readonly songService: SongService, private readonly stationService: StationService) {}

  @ResolveField((returns) => StationDTO)
  async station(@Root() song: HistorySongDTO) {
    return this.stationService.findOneOrFail({ where: { slug: song.stationSlug } });
  }

  @Query((returns) => [HistorySongDTO])
  async historySongs(
    @Args({ name: 'pagination', nullable: true, type: () => PaginationInput }) pagination: PaginationInput,
    @Args({ name: 'where', type: () => HistorySongFindAllWhereInput })
    where: HistorySongFindAllWhereInput,
  ) {
    const entities = await this.songService.findHistorySongs(where.stationSlug, pagination);
    return entities.map((entity) => ({ ...entity, id: entity.url }));
  }

  @Query((returns) => Int)
  async countHistorySongs(
    @Args({ name: 'where', type: () => HistorySongFindAllWhereInput })
    where: HistorySongFindAllWhereInput,
  ) {
    const count = await this.songService.countHistorySongs(where.stationSlug);
    return count;
  }
}
