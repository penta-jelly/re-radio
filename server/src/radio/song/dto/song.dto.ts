import { Field, Int, ObjectType } from 'type-graphql';
import { SongStatusEnum } from 'radio/song/entities/song.entity';
import { StationDTO } from 'radio/station/dto/station.dto';
import { UserDTO } from 'radio/user/dto/user.dto';

@ObjectType('Song')
export class SongDTO {
  @Field(type => Int)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  startedAt?: Date;

  @Field()
  title: string;

  @Field()
  url: string;

  @Field()
  thumbnail: string;

  @Field(type => Int)
  duration: number;

  @Field(type => SongStatusEnum)
  status: SongStatusEnum;

  @Field(type => UserDTO)
  creator: UserDTO;

  @Field(type => StationDTO)
  station: StationDTO;

  @Field()
  stationSlug: string;

  @Field(type => [Int])
  upVoteUserIds: number[];

  @Field(type => [Int])
  downVoteUserIds: number[];
}
