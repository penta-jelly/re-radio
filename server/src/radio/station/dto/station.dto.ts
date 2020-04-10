import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SongDTO } from 'radio/song/dto/song.dto';
import { UserRoleDTO } from 'radio/user/dto/user-role.dto';
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

  @Field(type => SongDTO, { nullable: true })
  playingSong?: SongDTO;

  @Field(type => [UserRoleDTO])
  userRoles: UserRoleDTO[];

  @Field(type => [StationTagDTO])
  tags: StationTagDTO[];

  @Field(type => [Int])
  onlineUserIds: number[];
}
