import { Field, ObjectType } from 'type-graphql';
import { MutationEnum } from 'core/typeorm/entity-subscription.interface';
import { StationDTO } from './station.dto';

@ObjectType('StationSubscription')
export class StationSubscriptionDTO {
  @Field(type => MutationEnum)
  mutation: MutationEnum;

  @Field(type => StationDTO)
  entity: StationDTO;
}
