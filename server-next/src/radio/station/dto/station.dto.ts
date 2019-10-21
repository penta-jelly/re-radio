import { UserRoleDTO } from 'radio/user/dto/user-role.dto';
import { UserDTO } from 'radio/user/dto/user.dto';
import { Field, Int, ObjectType } from 'type-graphql';
import { StationTagDTO } from './station-tag.dto';

@ObjectType('Station')
export class StationDTO {
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

  @Field(type => [UserRoleDTO])
  userRoles: UserRoleDTO[];

  @Field(type => [StationTagDTO])
  tags: StationTagDTO[];

  @Field(type => [UserDTO])
  onlineUsers: UserDTO[];
}
