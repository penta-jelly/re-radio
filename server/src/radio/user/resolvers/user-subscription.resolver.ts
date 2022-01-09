import { Args, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from '../../../core/pub-sub/pub-sub.service';
import { EntitySubscription } from '../../../core/typeorm/entity-subscription.interface';
import { StationSubscriptionDTO } from '../../station/dto/station-subscription.dto';
import { UserSubscriptionDTO } from '../dto/user-subscription.dto';
import { User } from '../entities/user.entity';
import { UserFindOneWhereInput } from '../user.input';
import { USER_SUBSCRIPTION } from '../user.subscriber';

@Resolver((of) => StationSubscriptionDTO)
export class UserSubscriptionResolver {
  constructor(private readonly pubSub: PubSub) {}

  @Subscription((returns) => UserSubscriptionDTO, { name: 'user' })
  async *userSubscription(@Args({ name: 'where', type: () => UserFindOneWhereInput }) where: UserFindOneWhereInput) {
    for await (const payload of this.pubSub.asyncIterable<EntitySubscription<User>>(USER_SUBSCRIPTION)) {
      if (!Object.keys(where).every((key) => where[key] === payload.entity[key])) {
        continue;
      }
      await this.workaroundToMakeNextStepMoveToTheBottomOfTheEventQueue();
      yield { user: payload };
    }
  }

  async workaroundToMakeNextStepMoveToTheBottomOfTheEventQueue() {
    return new Promise((r) => setTimeout(r, 300));
  }
}
