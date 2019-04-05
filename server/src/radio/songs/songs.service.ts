import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SongCreateInputDTO } from './dto/SongCreateInput.dto';
import { Song } from '../../prisma/prisma.binding';

@Injectable()
export class SongsService {
  constructor(private readonly prisma: PrismaService) {}

  async createSong(args: SongCreateInputDTO, info): Promise<Song> {
    if (args.data.status !== 'PENDING') {
      throw new NotAcceptableException('Only status PENDING is allowed when create a song');
    }
    return await this.prisma.mutation.createSong(args, info);
  }
}
