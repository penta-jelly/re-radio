import { MutationEnum } from 'core/typeorm/entity-subscription.interface';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType('UserSubscriptionEntity')
export class UserSubscriptionDTOEntity {
  @Field(type => Int)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  avatarUrl?: string;

  @Field({ nullable: true })
  coverUrl?: string;

  @Field(type => Int, { nullable: true })
  reputation: number;

  @Field({ nullable: true })
  facebookId?: string;

  @Field({ nullable: true })
  googleId?: string;
}

@ObjectType('UserSubscription')
export class UserSubscriptionDTO {
  @Field(type => MutationEnum)
  mutation: MutationEnum;

  @Field(type => UserSubscriptionDTOEntity)
  entity: UserSubscriptionDTOEntity;
}
