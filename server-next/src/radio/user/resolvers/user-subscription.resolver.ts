import { UseGuards } from '@nestjs/common';
import { Args, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'core/pub-sub/pub-sub.service';
import { EntitySubscription } from 'core/typeorm/entity-subscription.interface';
import { Roles } from 'radio/auth/decorators/Roles.decorator';
import { AuthenticationGuard } from 'radio/auth/guards/Authentication.guard';
import { AuthorizationGuard } from 'radio/auth/guards/Authorization.guard';
import { StationSubscriptionDTO } from 'radio/station/dto/station-subscription.dto';
import { UserSubscriptionDTO } from '../dto/user-subscription.dto';
import { UserRoleEnum } from '../entities/user-role.entity';
import { User } from '../entities/user.entity';
import { UserFindOneWhereInput } from '../user.input';
import { USER_SUBSCRIPTION } from '../user.subscriber';

@Resolver(of => StationSubscriptionDTO)
export class UserSubscriptionResolver {
  constructor(private readonly pubSub: PubSub) {}

  @Subscription(returns => UserSubscriptionDTO, { name: 'user' })
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles([UserRoleEnum.ADMIN])
  async *userSubscription(
    @Args({ name: 'where', nullable: true, type: () => UserFindOneWhereInput }) where: UserFindOneWhereInput,
  ) {
    for await (const payload of this.pubSub.asyncIterable<EntitySubscription<User>>(USER_SUBSCRIPTION)) {
      if (Object.keys(where).length > 0) {
        if (
          where.username !== payload.entity.username &&
          where.email !== payload.entity.email &&
          where.id !== payload.entity.id
        ) {
          continue;
        }
      }
      yield { user: payload };
    }
  }
}
