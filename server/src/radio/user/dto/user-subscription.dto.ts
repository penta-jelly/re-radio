import { Field, ObjectType } from '@nestjs/graphql';
import { MutationEnum } from '../../../core/typeorm/entity-subscription.interface';
import { UserDTO } from './user.dto';

@ObjectType('UserSubscription')
export class UserSubscriptionDTO {
  @Field(type => MutationEnum)
  mutation: MutationEnum;

  @Field(type => UserDTO)
  entity: UserDTO;
}
