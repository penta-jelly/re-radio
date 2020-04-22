import { Injectable, InternalServerErrorException, NotAcceptableException, Logger } from '@nestjs/common';
import getVideoId from 'get-video-id';
import Moment from 'moment';
import fetch from 'node-fetch';
import { ConfigService } from '../../../core/config/config.service';
import { EnvVariables } from '../../../core/config/config.variables';
import { SongCacheService } from '../cache/song-cache.service';
import { YoutubeVideoDetailDTO, YoutubeVideoDTO } from './youtube.dto';
import { YoutubeVideoFindAllInput, YoutubeVideoOrderEnum } from './youtube.input';
import { YOUTUBE_SERVICE_KEY } from './shared';

@Injectable()
export class YoutubeService {
  private logger = new Logger(YoutubeService.name);
  constructor(private readonly configService: ConfigService, private readonly cacheService: SongCacheService) {}

  public parseVideoUrl(url: string): VideoReturnType {
    const { id, service } = getVideoId(url);
    if (!id) throw new InternalServerErrorException('Invalid url');
    if (service !== YOUTUBE_SERVICE_KEY) throw new NotAcceptableException(`Service ${service} is not supported yet`);
    return { id, service };
  }

  public async fetchVideoDetail(
    videoId: string,
    part: string = 'id,snippet,contentDetails',
  ): Promise<YoutubeVideoDetailDTO> {
    let video;
    const cache = await this.cacheService.findOne(videoId, 'youtube', part);
    if (cache) {
      video = cache.data;
    } else {
      const apiUrl = this.configService.get(EnvVariables.YOUTUBE_API_URL);
      const apiKey = this.configService.get(EnvVariables.YOUTUBE_API_KEY);
      const params = { id: videoId, key: apiKey, part };
      const serviceUrl = `${apiUrl}/videos?${this.toQueryString(params)}`;
      const data = await fetch(serviceUrl).then((res) => res.json());
      video = data?.items?.[0];
      if (!video) {
        throw new InternalServerErrorException(`Could not find video with this request URL: ${serviceUrl}`);
      }
      await this.cacheService.persist(videoId, 'youtube', video, part);
    }

    if (video?.contentDetails?.duration) {
      video.contentDetails.duration = this.parseDuration(video.contentDetails.duration);
    }
    return video;
  }

  public async searchVideos({
    q,
    maxResults = 5,
    order = YoutubeVideoOrderEnum.RELEVANCE,
    relatedToVideoUrl,
  }: YoutubeVideoFindAllInput): Promise<YoutubeVideoDTO[]> {
    const apiUrl = this.configService.get(EnvVariables.YOUTUBE_API_URL);
    const apiKey = this.configService.get(EnvVariables.YOUTUBE_API_KEY);
    const part = 'id';
    const type = 'video';
    const params: QueryParams = { key: apiKey, part, type, q, maxResults, order };
    const relatedToVideoId = relatedToVideoUrl ? this.parseVideoUrl(relatedToVideoUrl).id : '';
    if (relatedToVideoId) {
      params.relatedToVideoId = relatedToVideoId;
    }
    const serviceUrl = `${apiUrl}/search?${this.toQueryString(params)}`;
    const data = await fetch(serviceUrl).then((res) => res.json());

    if (!data || !Array.isArray(data.items)) {
      throw new InternalServerErrorException(`Could not find any videos with this request URL: ${serviceUrl}`);
    }
    const videoIds: string[] = data.items.map((item) => item.id && item.id.videoId);
    const resultPart = 'id,snippet';
    const cachedVideos = await this.cacheService.findAll(
      videoIds.map((videoId) => ({ songId: videoId, songService: 'youtube', queryParts: resultPart })),
    );

    const notYetCacheVideoIds = videoIds.filter((id) => cachedVideos.every(({ songId }) => songId !== id));
    const notYetCacheVideos = await Promise.all(
      notYetCacheVideoIds.map((videoId) => this.fetchVideoDetail(videoId, resultPart)),
    );

    const videos = videoIds.map((id) => {
      const cachedVideo = cachedVideos.find(({ songId }) => songId === id);
      const notYetCacheVideo = notYetCacheVideos.find((video) => video.id === id);
      if (!cachedVideo && !notYetCacheVideo) {
        throw new InternalServerErrorException(`Cannot find video ${id} in either cached or API.`);
      }
      // FIXME: dangerous type casting
      const video = (cachedVideo?.data || notYetCacheVideo) as YoutubeVideoDTO;
      return video;
    });

    return videos;
  }

  private parseDuration(duration: string) {
    return Moment.duration(duration).asMilliseconds();
  }

  private toQueryString(params: QueryParams): string {
    return Object.keys(params).reduce((query, key) => {
      let param = '';
      if (params[key]) {
        param = `${key}=${params[key]}`;
      }
      return query.length > 0 ? [query, param].join('&') : param;
    }, '');
  }
}

interface QueryParams {
  [key: string]: string | number | undefined;
}

export interface VideoReturnType {
  id: string;
  service: typeof YOUTUBE_SERVICE_KEY;
}
