import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsUrl, ValidateNested } from 'class-validator';
import { SongStatusEnum, SongUpdateManyDataInput, SongWhereInput } from '../../../prisma/prisma.binding';

export class SongUpdateManyDTO implements SongUpdateManyDataInput {
  title?: string;

  @IsOptional()
  @IsUrl()
  url?: string;

  @IsOptional()
  @IsUrl()
  thumbnail?: string;

  @IsOptional()
  @IsInt()
  duration?: number;

  status?: SongStatusEnum;
}

export class SongUpdateManyInputDTO {
  @ValidateNested()
  @Type(() => SongUpdateManyDTO)
  data: SongUpdateManyDTO;

  where?: SongWhereInput;
}
