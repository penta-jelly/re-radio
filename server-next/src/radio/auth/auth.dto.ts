import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class AuthenticationDTO {
  @Field()
  token: string;
}
