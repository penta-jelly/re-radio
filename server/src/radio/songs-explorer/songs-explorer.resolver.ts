import { BadRequestException, Injectable } from '@nestjs/common';
import { Args, Query } from '@nestjs/graphql';
import { SongExplorersWhereInputDTO } from './dto/SongExplorersWhereInput.dto';
import { SongExplorerWhereInputDTO } from './dto/SongExplorerWhereInput.dto';
import { YoutubeService } from './youtube/youtube.service';

@Injectable()
export class SongsExplorerResolver {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Query('songExplorer')
  async exploreSong(@Args() args: SongExplorerWhereInputDTO) {
    if (!args.where.url && !args.where.videoId) throw new BadRequestException('Either url or videoId are required.');
    let { videoId } = args.where;
    if (args.where.url) {
      videoId = this.youtubeService.parseVideoUrl(args.where.url).id;
    }
    return this.youtubeService.fetchVideoDetail(videoId);
  }

  @Query('songExplorers')
  async exploreSongs(@Args() args: SongExplorersWhereInputDTO) {
    return this.youtubeService.searchVideos(args.where);
  }
}
