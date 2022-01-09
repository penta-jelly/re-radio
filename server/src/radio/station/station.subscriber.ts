import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, EntitySubscriberInterface, InsertEvent, RemoveEvent, UpdateEvent } from 'typeorm';
import { PubSub } from '../../core/pub-sub/pub-sub.service';
import { EntitySubscription, MutationEnum } from '../../core/typeorm/entity-subscription.interface';
import { Station } from './entities/station.entity';

export const STATION_SUBSCRIPTION = 'STATION_SUBSCRIPTION';

@Injectable()
export class StationSubscriber implements EntitySubscriberInterface {
  constructor(@InjectConnection() private readonly connection: Connection, private readonly pubSub: PubSub) {
    connection.subscribers.push(this);
  }

  listenTo = () => Station;

  async afterInsert(event: InsertEvent<Station>) {
    await this.pubSub.publish<EntitySubscription<Station>>(STATION_SUBSCRIPTION, {
      mutation: MutationEnum.CREATED,
      entity: event.entity,
    });
  }

  async afterUpdate(event: UpdateEvent<Station>) {
    await this.pubSub.publish<EntitySubscription<Station>>(STATION_SUBSCRIPTION, {
      mutation: MutationEnum.UPDATED,
      entity: event.entity,
    });
  }

  async beforeRemove(event: RemoveEvent<Station>) {
    if (!event.entity) {
      throw new Error(`Could not find entity with-in event. Do you miss something?`);
    }

    await this.pubSub.publish<EntitySubscription<Station>>(STATION_SUBSCRIPTION, {
      mutation: MutationEnum.DELETED,
      entity: event.entity,
    });
  }
}
