import { Field, ObjectType } from '@nestjs/graphql';
import { MutationEnum } from '../../../core/typeorm/entity-subscription.interface';
import { SongDTO } from './song.dto';

@ObjectType('SongSubscription')
export class SongSubscriptionDTO {
  @Field((type) => MutationEnum)
  mutation: MutationEnum;

  @Field((type) => SongDTO)
  entity: SongDTO;
}
