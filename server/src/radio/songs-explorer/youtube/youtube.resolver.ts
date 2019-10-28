import { BadRequestException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { YoutubeVideoDetailDTO, YoutubeVideoDTO } from 'radio/songs-explorer/youtube/youtube.dto';
import { YoutubeVideoFindAllInput, YoutubeVideoFindOneInput } from './youtube.input';
import { YoutubeService } from './youtube.service';

@Resolver(of => YoutubeVideoDetailDTO)
export class YoutubeResolver {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Query(returns => YoutubeVideoDetailDTO)
  async youtubeVideo(@Args({ name: 'where', type: () => YoutubeVideoFindOneInput }) where: YoutubeVideoFindOneInput) {
    if (!where.url && !where.videoId) throw new BadRequestException('Either url or videoId are required.');
    let videoId = where.videoId || '';
    if (where.url) {
      videoId = this.youtubeService.parseVideoUrl(where.url).id;
    }
    return await this.youtubeService.fetchVideoDetail(videoId);
  }

  @Query(returns => [YoutubeVideoDTO])
  async youtubeVideos(@Args({ name: 'where', type: () => YoutubeVideoFindAllInput }) where: YoutubeVideoFindAllInput) {
    if (!where.q.trim()) return [];
    return this.youtubeService.searchVideos(where);
  }
}
