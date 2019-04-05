interface BaseItem {
  kind: string;
  etag: string;
}

export interface Response extends BaseItem {
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Video[];
}

export interface Video extends BaseItem {
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetail;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: 'none';
  defaultAudioLanguage?: string;
  localized: {
    title: string;
    description: string;
  };
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ContentDetail {
  duration: number;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  regionRestriction?: {
    blocked: string[];
  };
}

export type Order = 'date' | 'rating' | 'relevance' | 'title' | 'viewCount' | 'videoCount';
export const orders: Order[] = ['date', 'rating', 'relevance', 'title', 'viewCount', 'videoCount'];
