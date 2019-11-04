import { Field, Int, ObjectType } from 'type-graphql';
import { MutationEnum } from 'core/typeorm/entity-subscription.interface';
import { SongDTO } from 'radio/song/dto/song.dto';

@ObjectType('StationSubscriptionEntity')
export class StationSubscriptionDTOEntity {
  @Field(type => Int)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field({ nullable: true })
  description?: string;

  @Field(type => SongDTO, { nullable: true })
  playingSong?: SongDTO;
}

@ObjectType('StationSubscription')
export class StationSubscriptionDTO {
  @Field(type => MutationEnum)
  mutation: MutationEnum;

  @Field(type => StationSubscriptionDTOEntity)
  entity: StationSubscriptionDTOEntity;
}
