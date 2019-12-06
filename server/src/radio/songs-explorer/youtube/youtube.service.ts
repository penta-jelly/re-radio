import { Injectable, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
import getVideoId from 'get-video-id';
import Moment from 'moment';
import fetch from 'node-fetch';
import { EnvVariables } from 'core/config/config.variables';
import { ConfigService } from 'core/config/config.service';
import { YoutubeVideoDetailDTO, YoutubeVideoDTO } from 'radio/songs-explorer/youtube/youtube.dto';
import { YoutubeVideoFindAllInput, YoutubeVideoOrderEnum } from 'radio/songs-explorer/youtube/youtube.input';

@Injectable()
export class YoutubeService {
  constructor(private readonly configService: ConfigService) {}

  public parseVideoUrl(url: string): VideoReturnType {
    const { id, service } = getVideoId(url);
    if (!id) throw new InternalServerErrorException('Invalid url');
    if (service !== 'youtube') throw new NotAcceptableException(`Service ${service} is not supported yet`);
    return { id, service };
  }

  public async fetchVideoDetail(videoId: string): Promise<YoutubeVideoDetailDTO> {
    const apiUrl = this.configService.get(EnvVariables.YOUTUBE_API_URL);
    const apiKey = this.configService.get(EnvVariables.YOUTUBE_API_KEY);
    const part = 'id,snippet,contentDetails';
    const serviceUrl = `${apiUrl}/videos?id=${videoId}&key=${apiKey}&part=${part}`;
    const data = await fetch(serviceUrl).then(res => res.json());
    const video = data?.items?.[0];
    if (video) {
      video.contentDetails.duration = this.parseDuration(video.contentDetails.duration);
      return video;
    }
    throw new InternalServerErrorException(`Could not find video with this request URL: ${serviceUrl}`);
  }

  public async searchVideos({
    q,
    maxResults = 5,
    order = YoutubeVideoOrderEnum.RELEVANCE,
  }: YoutubeVideoFindAllInput): Promise<YoutubeVideoDTO[]> {
    const apiUrl = this.configService.get(EnvVariables.YOUTUBE_API_URL);
    const apiKey = this.configService.get(EnvVariables.YOUTUBE_API_KEY);
    const part = 'id,snippet';
    const type = 'video';
    const serviceUrl = `${apiUrl}/search?key=${apiKey}&type=${type}&part=${part}&q=${q}&maxResults=${maxResults}&order=${order}`;
    const data = await fetch(serviceUrl).then(res => res.json());
    if (data && Array.isArray(data.items)) {
      return data.items.map(item => ({
        ...item,
        id: item.id && item.id.videoId,
      }));
    }
    throw new InternalServerErrorException(`Could not find any videos with this request URL: ${serviceUrl}`);
  }

  public parseDuration(duration: string) {
    return Moment.duration(duration).asMilliseconds();
  }
}

export interface VideoReturnType {
  id: string;
  service: 'youtube';
}
