import { Type } from 'class-transformer';
import { IsUrl, ValidateNested, IsOptional } from 'class-validator';

export class SongExplorerWhereDTO {
  @IsUrl()
  @IsOptional()
  url?: string;

  @IsOptional()
  videoId?: string;
}

export class SongExplorerWhereInputDTO {
  @ValidateNested()
  @Type(() => SongExplorerWhereDTO)
  where: SongExplorerWhereDTO;
}
