import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, EntitySubscriberInterface, InsertEvent, RemoveEvent, UpdateEvent } from 'typeorm';
import { PubSub } from '../../core/pub-sub/pub-sub.service';
import { EntitySubscription, MutationEnum } from '../../core/typeorm/entity-subscription.interface';
import { Song } from './entities/song.entity';

export const SONG_SUBSCRIPTION = 'SONG_SUBSCRIPTION';

@Injectable()
export class SongSubscriber implements EntitySubscriberInterface {
  constructor(@InjectConnection() private readonly connection: Connection, private readonly pubSub: PubSub) {
    connection.subscribers.push(this);
  }

  listenTo = () => Song;

  async afterInsert(event: InsertEvent<Song>) {
    await this.pubSub.publish<EntitySubscription<Song>>(SONG_SUBSCRIPTION, {
      mutation: MutationEnum.CREATED,
      entity: event.entity,
    });
  }

  async afterUpdate(event: UpdateEvent<Song>) {
    await this.pubSub.publish<EntitySubscription<Song>>(SONG_SUBSCRIPTION, {
      mutation: MutationEnum.UPDATED,
      entity: event.entity,
    });
  }

  async beforeRemove(event: RemoveEvent<Song>) {
    if (!event.entity) {
      throw new Error(`Could not find entity with-in event. Do you miss something?`);
    }

    await this.pubSub.publish<EntitySubscription<Song>>(SONG_SUBSCRIPTION, {
      mutation: MutationEnum.DELETED,
      entity: event.entity,
    });
  }
}
