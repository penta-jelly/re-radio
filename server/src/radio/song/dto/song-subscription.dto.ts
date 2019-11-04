import { Field, Int, ObjectType } from 'type-graphql';
import { MutationEnum } from 'core/typeorm/entity-subscription.interface';
import { SongStatusEnum } from 'radio/song/entities/song.entity';

@ObjectType('SongSubscriptionEntity')
export class SongSubscriptionDTOEntity {
  @Field(type => Int)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  startedAt?: Date;

  @Field()
  title: string;

  @Field()
  url: string;

  @Field()
  thumbnail: string;

  @Field(type => Int)
  duration: number;

  @Field(type => SongStatusEnum)
  status: SongStatusEnum;

  @Field()
  stationSlug: string;

  @Field(type => [Int])
  upVoteUserIds: number[];

  @Field(type => [Int])
  downVoteUserIds: number[];
}

@ObjectType('SongSubscription')
export class SongSubscriptionDTO {
  @Field(type => MutationEnum)
  mutation: MutationEnum;

  @Field(type => SongSubscriptionDTOEntity)
  entity: SongSubscriptionDTOEntity;
}
