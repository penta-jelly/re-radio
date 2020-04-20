import { Field, Int, ObjectType } from '@nestjs/graphql';
import { StationDTO } from '../../station/dto/station.dto';
import { UserDTO } from '../../user/dto/user.dto';
import { SongStatusEnum } from '../entities/song.entity';

@ObjectType('Song')
export class SongDTO {
  @Field((type) => Int)
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

  @Field((type) => Int)
  duration: number;

  @Field((type) => SongStatusEnum)
  status: SongStatusEnum;

  @Field((type) => UserDTO)
  creator: UserDTO;

  @Field((type) => StationDTO)
  station: StationDTO;

  @Field()
  stationSlug: string;

  @Field((type) => [Int])
  upVoteUserIds: number[];

  @Field((type) => [Int])
  downVoteUserIds: number[];
}

@ObjectType('HistorySong')
export class HistorySongDTO {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  url: string;

  @Field()
  thumbnail: string;

  @Field((type) => Int)
  duration: number;

  @Field((type) => StationDTO)
  station: StationDTO;

  @Field()
  stationSlug: string;

  @Field((type) => [Int])
  creatorIds: number[];

  @Field((type) => Int)
  playedTimes: number;
}
