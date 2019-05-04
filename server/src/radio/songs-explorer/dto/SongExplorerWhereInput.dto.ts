import { Type } from 'class-transformer';
import { IsOptional, IsUrl, ValidateNested } from 'class-validator';

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
