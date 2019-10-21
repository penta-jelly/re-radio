import { Args, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'core/pub-sub/pub-sub.service';
import { EntitySubscription } from 'core/typeorm/entity-subscription.interface';
import { StationSubscriptionDTO } from 'radio/station/dto/station-subscription.dto';
import { Station } from 'radio/station/entities/station.entity';
import { StationFindOneWhereInput } from 'radio/station/station.input';
import { STATION_SUBSCRIPTION } from 'radio/station/station.subscriber';

@Resolver(of => StationSubscriptionDTO)
export class StationSubscriptionResolver {
  constructor(private readonly pubSub: PubSub) {}

  @Subscription(returns => StationSubscriptionDTO, { name: 'station' })
  async *stationSubscription(
    @Args({ name: 'where', nullable: true, type: () => StationFindOneWhereInput }) where: StationFindOneWhereInput,
  ) {
    for await (const payload of this.pubSub.asyncIterable<EntitySubscription<Station>>(STATION_SUBSCRIPTION)) {
      if (Object.keys(where).length > 0) {
        if (
          where.name !== payload.entity.name &&
          where.slug !== payload.entity.slug &&
          where.id !== payload.entity.id
        ) {
          continue;
        }
      }
      yield { station: payload };
    }
  }
}
