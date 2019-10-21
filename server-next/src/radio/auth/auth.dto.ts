import { Field, ObjectType } from 'type-graphql';

@ObjectType('Authentication')
export class AuthenticationDTO {
  @Field()
  token: string;
}
