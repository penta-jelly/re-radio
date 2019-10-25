import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Thumbnail {
  @Field()
  url: string;
  @Field()
  width: number;
  @Field()
  height: number;
}

@ObjectType()
export class Thumbnails {
  @Field(type => Thumbnail)
  default: Thumbnail;
  @Field(type => Thumbnail, { nullable: true })
  medium: Thumbnail;
  @Field(type => Thumbnail, { nullable: true })
  high: Thumbnail;
  @Field(type => Thumbnail, { nullable: true })
  standard: Thumbnail;
  @Field(type => Thumbnail, { nullable: true })
  maxres: Thumbnail;
}

@ObjectType()
export class Snippet {
  @Field()
  publishedAt: string;
  @Field()
  channelId: string;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field(type => Thumbnails)
  thumbnails: Thumbnails;
  @Field()
  channelTitle: string;
}

@ObjectType()
export class ContentDetails {
  @Field()
  duration: number;
  @Field()
  dimension: string;
  @Field()
  definition: string;
  @Field()
  caption: string;
}

@ObjectType('YoutubeVideoDetail')
export class YoutubeVideoDetailDTO {
  @Field()
  id: string;

  @Field(type => Snippet)
  snippet: Snippet;

  @Field(type => ContentDetails)
  contentDetails: ContentDetails;
}

interface BaseItem {
  kind: string;
  etag: string;
}

export interface Response extends BaseItem {
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubeVideoDetailDTO[];
}

@ObjectType('YoutubeVideo')
export class YoutubeVideoDTO {
  @Field()
  id: string;

  @Field(type => Snippet)
  snippet: Snippet;
}
