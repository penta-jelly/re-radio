import { Type } from 'class-transformer';
import { IsIn, IsNumber, IsOptional, Max, Min, ValidateNested } from 'class-validator';
import { Order, orders } from '../youtube/interfaces/YouTubeVideo';

export class SongExplorersWhereDTO {
  q: string;

  @IsNumber()
  @Min(0)
  @Max(50)
  @IsOptional()
  maxResults?: number;

  @IsIn(orders)
  @IsOptional()
  order?: Order;
}

export class SongExplorersWhereInputDTO {
  @ValidateNested()
  @Type(() => SongExplorersWhereDTO)
  where: SongExplorersWhereDTO;
}
