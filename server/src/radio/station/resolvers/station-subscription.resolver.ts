import { Args, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from '../../../core/pub-sub/pub-sub.service';
import { EntitySubscription, MutationEnum } from '../../../core/typeorm/entity-subscription.interface';
import { StationSubscriptionDTO } from '../dto/station-subscription.dto';
import { Station } from '../entities/station.entity';
import { StationService } from '../services/station.service';
import { StationFindOneWhereInput } from '../station.input';
import { STATION_SUBSCRIPTION } from '../station.subscriber';

@Resolver((of) => StationSubscriptionDTO)
export class StationSubscriptionResolver {
  constructor(private readonly pubSub: PubSub, private readonly stationService: StationService) {}

  @Subscription((returns) => StationSubscriptionDTO, { name: 'station' })
  async *stationSubscription(
    @Args({ name: 'where', nullable: true, type: () => StationFindOneWhereInput }) where: StationFindOneWhereInput,
  ) {
    for await (const payload of this.pubSub.asyncIterable<EntitySubscription<Station>>(STATION_SUBSCRIPTION)) {
      if (!Object.keys(where).every((key) => where[key] === payload.entity[key])) {
        continue;
      }
      await this.workaroundToMakeNextStepMoveToTheBottomOfTheEventQueue();
      if (payload.mutation !== MutationEnum.DELETED) {
        payload.entity = await this.stationService.findOneOrFail({
          where: { id: payload.entity.id },
          relations: ['playingSong'],
        });
      }
      yield { station: payload };
    }
  }

  async workaroundToMakeNextStepMoveToTheBottomOfTheEventQueue() {
    return new Promise((r) => setTimeout(r, 300));
  }
}
