import { Field, Int, ObjectType } from '@nestjs/graphql';
import { StationDTO } from '../../station/dto/station.dto';
import { UserRoleEnum } from '../entities/user-role.entity';
import { UserDTO } from './user.dto';

@ObjectType('UserRole')
export class UserRoleDTO {
  @Field((type) => Int)
  id: number;

  @Field((type) => UserRoleEnum)
  role: UserRoleEnum;

  @Field((type) => UserDTO)
  user: UserDTO;

  @Field((type) => StationDTO, { nullable: true })
  station?: StationDTO;
}
