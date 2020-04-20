import { Field, InputType, Int } from '@nestjs/graphql';
import { IsUrl } from 'class-validator';
import { OrderEnum } from '../../core/graphql/input/order';
import { SongStatusEnum } from './entities/song.entity';

@InputType()
export class SongFindAllOrderInput {
  @Field((type) => OrderEnum, { nullable: true })
  id?: OrderEnum;

  @Field((type) => OrderEnum, { nullable: true })
  createdAt?: OrderEnum;

  @Field((type) => OrderEnum, { nullable: true })
  updatedAt?: OrderEnum;

  @Field((type) => OrderEnum, { nullable: true })
  title?: OrderEnum;

  @Field((type) => OrderEnum, { nullable: true })
  url?: OrderEnum;

  @Field((type) => OrderEnum, { nullable: true })
  thumbnail?: OrderEnum;

  @Field((type) => OrderEnum, { nullable: true })
  duration?: OrderEnum;
}

@InputType()
export class SongFindAllWhereInput {
  @Field({ nullable: true })
  stationSlug?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  thumbnail?: string;

  @Field((type) => Int, { nullable: true })
  duration?: number;

  @Field((type) => SongStatusEnum, { nullable: true })
  status?: SongStatusEnum;
}

@InputType()
export class SongFindOneWhereInput {
  @Field((type) => Int)
  id: number;
}

@InputType()
export class SongCreateInput {
  @Field()
  title: string;

  @Field()
  @IsUrl()
  url: string;

  @Field()
  @IsUrl()
  thumbnail: string;

  @Field((type) => Int)
  duration: number;

  @Field((type) => SongStatusEnum, { nullable: true })
  status?: SongStatusEnum;

  @Field({ nullable: true })
  stationSlug?: string;
}

@InputType()
export class SongUpdateInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  @IsUrl()
  url?: string;

  @Field({ nullable: true })
  @IsUrl()
  thumbnail?: string;

  @Field((type) => Int, { nullable: true })
  duration?: number;

  @Field((type) => SongStatusEnum, { nullable: true })
  status?: SongStatusEnum;
}

@InputType()
export class HistorySongFindAllWhereInput {
  @Field()
  stationSlug: string;
}
