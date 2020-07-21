import { BadRequestException, Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import AcceptLanguageParser from 'accept-language-parser';
import { Headers } from '../../../core/graphql/decorators/Headers.decorator';
import { YoutubeVideoDetailDTO, YoutubeVideoDTO } from './youtube.dto';
import { YoutubeVideoFindAllInput, YoutubeVideoFindOneInput, YoutubeTrendingVideoFindAllInput } from './youtube.input';
import { YoutubeService } from './youtube.service';

@Resolver((of) => YoutubeVideoDetailDTO)
export class YoutubeResolver {
  private readonly logger = new Logger(YoutubeResolver.name);
  constructor(private readonly youtubeService: YoutubeService) {}

  @Query((returns) => YoutubeVideoDetailDTO)
  async youtubeVideo(@Args({ name: 'where', type: () => YoutubeVideoFindOneInput }) where: YoutubeVideoFindOneInput) {
    if (!where.url && !where.videoId) throw new BadRequestException('Either url or videoId are required.');
    let videoId = where.videoId || '';
    if (where.url) {
      videoId = this.youtubeService.parseVideoUrl(where.url).id;
    }
    return await this.youtubeService.fetchVideoDetail(videoId);
  }

  @Query((returns) => [YoutubeVideoDTO])
  async youtubeVideos(@Args({ name: 'where', type: () => YoutubeVideoFindAllInput }) where: YoutubeVideoFindAllInput) {
    if (where.q?.trim().length === 0) return [];
    if (!where.q && !where.relatedToVideoUrl) {
      throw new BadRequestException('Either q or relatedToVideoUrl are required.');
    }
    return this.youtubeService.searchVideos(where);
  }

  @Query((returns) => [YoutubeVideoDTO])
  async youtubeTrendingVideos(
    @Args({ name: 'where', type: () => YoutubeTrendingVideoFindAllInput }) where: YoutubeTrendingVideoFindAllInput,
    @Headers('Accept-Language') acceptLanguageHeader: string,
  ) {
    this.logger.log(`Headers ${acceptLanguageHeader}`);
    const language = AcceptLanguageParser.parse(acceptLanguageHeader).filter(({ region }) => !!region)[0];
    const region = language?.region || 'US';
    return this.youtubeService.fetchTrendingVideos({ regionCode: region, ...where });
  }
}
