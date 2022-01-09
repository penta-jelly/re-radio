import { Args, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from '../../../core/pub-sub/pub-sub.service';
import { EntitySubscription } from '../../../core/typeorm/entity-subscription.interface';
import { SongSubscriptionDTO } from '../dto/song-subscription.dto';
import { Song } from '../entities/song.entity';
import { SongService } from '../services/song.service';
import { SongFindAllWhereInput } from '../song.input';
import { SONG_SUBSCRIPTION } from '../song.subscriber';

@Resolver((of) => SongSubscriptionDTO)
export class SongSubscriptionResolver {
  constructor(private readonly pubSub: PubSub, private readonly songService: SongService) {}

  @Subscription((returns) => SongSubscriptionDTO, { name: 'song' })
  async *songSubscription(
    @Args({ name: 'where', nullable: true, type: () => SongFindAllWhereInput }) where: SongFindAllWhereInput,
  ) {
    for await (const payload of this.pubSub.asyncIterable<EntitySubscription<Song>>(SONG_SUBSCRIPTION)) {
      if (!Object.keys(where).every((key) => where[key] === payload.entity[key])) {
        continue;
      }
      await this.workaroundToMakeNextStepMoveToTheBottomOfTheEventQueue();
      yield { song: payload };
    }
  }

  async workaroundToMakeNextStepMoveToTheBottomOfTheEventQueue() {
    return new Promise((r) => setTimeout(r, 300));
  }
}
