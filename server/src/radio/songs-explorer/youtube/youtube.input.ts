import { IsOptional, IsPositive, IsUrl, Max } from 'class-validator';
import { Field, InputType, registerEnumType } from 'type-graphql';

export enum YoutubeVideoOrderEnum {
  DATE = 'date',
  RATING = 'rating',
  RELEVANCE = 'relevance',
  TITLE = 'title',
  VIEW_COUNT = 'viewCount',
  VIDEO_COUNT = 'videoCount',
}
registerEnumType(YoutubeVideoOrderEnum, { name: 'SongExplorerOrderEnum' });

@InputType()
export class YoutubeVideoFindOneInput {
  @Field({ nullable: true })
  videoId?: string;

  @Field({ nullable: true })
  @IsUrl()
  @IsOptional()
  url?: string;
}

@InputType()
export class YoutubeVideoFindAllInput {
  @Field()
  q: string;

  @Field({ nullable: true })
  @IsPositive()
  @Max(20)
  @IsOptional()
  maxResults?: number;

  @Field(type => YoutubeVideoOrderEnum, { nullable: true })
  order?: YoutubeVideoOrderEnum;
}
