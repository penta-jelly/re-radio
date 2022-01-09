import { IsOptional, IsPositive, IsUrl, Max } from 'class-validator';
import { Field, InputType, registerEnumType } from '@nestjs/graphql';

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
  @Field({ nullable: true })
  q?: string;

  @Field({ nullable: true })
  @IsPositive()
  @Max(20)
  @IsOptional()
  maxResults: number = 5;

  @Field((type) => YoutubeVideoOrderEnum, { nullable: true })
  order: YoutubeVideoOrderEnum = YoutubeVideoOrderEnum.RELEVANCE;

  @Field({ nullable: true })
  relatedToVideoUrl?: string;
}

@InputType()
export class YoutubeTrendingVideoFindAllInput {
  @Field({ nullable: true, defaultValue: 5 })
  @IsPositive()
  @Max(20)
  @IsOptional()
  maxResults: number = 5;

  @Field({ nullable: true })
  @IsOptional()
  regionCode?: string;
}
