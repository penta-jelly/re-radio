import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Authentication')
export class AuthenticationDTO {
  @Field()
  token: string;
}
