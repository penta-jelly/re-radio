import { Field, ObjectType } from 'type-graphql';
import { UserRoleEnum } from '../entities/user-role.entity';
import { UserDTO } from './user.dto';

@ObjectType()
export class UserRoleDTO {
  @Field()
  id: number;

  @Field(type => UserRoleEnum)
  role: UserRoleEnum;

  @Field(type => UserDTO)
  user: UserDTO;
}
