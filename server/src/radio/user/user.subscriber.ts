import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, EntitySubscriberInterface, InsertEvent, RemoveEvent, UpdateEvent } from 'typeorm';
import { PubSub } from '../../core/pub-sub/pub-sub.service';
import { EntitySubscription, MutationEnum } from '../../core/typeorm/entity-subscription.interface';
import { User } from './entities/user.entity';

export const USER_SUBSCRIPTION = 'USER_SUBSCRIPTION';

@Injectable()
export class UserSubscriber implements EntitySubscriberInterface {
  constructor(@InjectConnection() private readonly connection: Connection, private readonly pubSub: PubSub) {
    connection.subscribers.push(this);
  }

  listenTo = () => User;

  async afterInsert(event: InsertEvent<User>) {
    await this.pubSub.publish<EntitySubscription<User>>(USER_SUBSCRIPTION, {
      mutation: MutationEnum.CREATED,
      entity: event.entity,
    });
  }

  async afterUpdate(event: UpdateEvent<User>) {
    await this.pubSub.publish<EntitySubscription<User>>(USER_SUBSCRIPTION, {
      mutation: MutationEnum.UPDATED,
      entity: event.entity,
    });
  }

  async beforeRemove(event: RemoveEvent<User>) {
    if (!event.entity) {
      throw new Error(`Could not find entity with-in event. Do you miss something?`);
    }

    await this.pubSub.publish<EntitySubscription<User>>(USER_SUBSCRIPTION, {
      mutation: MutationEnum.DELETED,
      entity: event.entity,
    });
  }
}
