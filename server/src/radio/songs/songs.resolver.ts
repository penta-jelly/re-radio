import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { BatchPayload, Song, SongWhereInput, SongWhereUniqueInput } from '../../prisma/prisma.binding';
import { PrismaService } from '../../prisma/prisma.service';
import { RoleDecoratorParam, Roles } from '../auth/decorators/Roles.decorator';
import { AuthenticationGuard } from '../auth/guards/Authentication.guard';
import { AuthorizationGuard } from '../auth/guards/Authorization.guard';
import { SongCreateInputDTO } from './dto/SongCreateInput.dto';
import { SongUpdateInputDTO } from './dto/SongUpdateInput.dto';
import { SongsService } from './songs.service';

@Resolver()
export class SongsResolver {
  constructor(private readonly prisma: PrismaService, private readonly songsService: SongsService) {}

  @Query('songs')
  async getSongs(@Args() args, @Info() info): Promise<Song[]> {
    return await this.prisma.query.songs(args, info);
  }

  @Query('song')
  async getSong(@Args() args, @Info() info): Promise<Song> {
    return await this.prisma.query.song(args, info);
  }

  @Mutation('createSong')
  @UseGuards(AuthenticationGuard)
  async createSong(@Args() args: SongCreateInputDTO, @Info() info): Promise<Song> {
    return await this.songsService.createSong(args, info);
  }

  @Mutation('updateSong')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN', SongsResolver.songCreatorChecker])
  async updateSong(@Args() args: SongUpdateInputDTO, @Info() info): Promise<Song> {
    return await this.prisma.mutation.updateSong(args, info);
  }

  @Mutation('updateManySongs')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN', SongsResolver.songCreatorChecker])
  async updateManySongs(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.updateManySongs(args, info);
  }

  @Mutation('deleteSong')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN', SongsResolver.songCreatorChecker])
  async deleteSong(@Args() args, @Info() info): Promise<Song> {
    return await this.prisma.mutation.deleteSong(args, info);
  }

  @Mutation('deleteManySongs')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(['ADMIN', SongsResolver.songCreatorChecker])
  async deleteManySongs(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteManySongs(args, info);
  }

  @Subscription('song')
  onSongMutation(@Args() args, @Info() info) {
    return this.prisma.subscription.song(args, info);
  }

  static async songCreatorChecker({
    user,
    args: { where },
    services: { prisma },
  }: RoleDecoratorParam<{ where: SongWhereUniqueInput | SongWhereInput }>) {
    const songs = await prisma.query.songs({ where }, `{ id creator { id } }`);
    return songs.every(song => song.creator.id === user.id);
  }
}
