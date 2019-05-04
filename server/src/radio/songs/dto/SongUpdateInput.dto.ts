import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsUrl, ValidateNested } from 'class-validator';
import {
  SongStatusEnum,
  SongUpdateInput,
  SongWhereUniqueInput,
  StationUpdateOneRequiredWithoutSongsInput,
  UserUpdateOneRequiredInput,
} from 'prisma/prisma.binding';

export class SongUpdateDTO implements SongUpdateInput {
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
  creator?: UserUpdateOneRequiredInput;
  station?: StationUpdateOneRequiredWithoutSongsInput;
}

export class SongUpdateInputDTO {
  @ValidateNested()
  @Type(() => SongUpdateDTO)
  data: SongUpdateDTO;

  where: SongWhereUniqueInput;
}
