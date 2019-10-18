import { MutationEnum } from 'core/typeorm/entity-subscription.interface';
import { Field, Int, ObjectType } from 'type-graphql';
import { UserRoleDTO } from './user-role.dto';

@ObjectType()
export class UserDTO {
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

  @Field(type => [UserRoleDTO])
  roles: UserRoleDTO[];
}

@ObjectType()
export class UserSubscriptionDTO {
  @Field(type => MutationEnum)
  mutation: MutationEnum;

  @Field(type => UserDTO, {
    nullable: true,
    description: `Return null when mutation is "${MutationEnum.DELETED}"`,
  })
  entity?: UserDTO;

  @Field(type => Int, {
    nullable: true,
    description: `Return null when mutation is "${MutationEnum.CREATED} or "${MutationEnum.UPDATED}"`,
  })
  entityId?: number;
}
