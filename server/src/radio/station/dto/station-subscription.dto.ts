import { MutationEnum } from 'core/typeorm/entity-subscription.interface';
import { Field, Int, ObjectType } from 'type-graphql';

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
}

@ObjectType('StationSubscription')
export class StationSubscriptionDTO {
  @Field(type => MutationEnum)
  mutation: MutationEnum;

  @Field(type => StationSubscriptionDTOEntity)
  entity: StationSubscriptionDTOEntity;
}
