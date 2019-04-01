import { Type } from 'class-transformer';
import { IsInt, IsUrl, ValidateNested } from 'class-validator';
import {
  SongCreateInput,
  SongStatusEnum,
  StationCreateOneWithoutSongsInput,
  UserCreateOneInput,
} from '../../../prisma/prisma.binding';

export class SongCreateDTO implements SongCreateInput {
  title: string;

  @IsUrl()
  url: string;

  @IsUrl()
  thumbnail: string;

  @IsInt()
  duration: number;

  status: SongStatusEnum;

  creator: UserCreateOneInput;
  station: StationCreateOneWithoutSongsInput;
}

export class SongCreateInputDTO {
  @ValidateNested()
  @Type(() => SongCreateDTO)
  data: SongCreateDTO;
}
