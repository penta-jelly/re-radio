import { Type } from 'class-transformer';
import { IsOptional, Length, NotContains, ValidateNested } from 'class-validator';
import { StationUpdateManyDataInput, StationWhereInput } from '../../../prisma/prisma.binding';

export class StationUpdateManyDTO implements StationUpdateManyDataInput {
  @Length(2, 32)
  @IsOptional()
  name?: string;

  @Length(2, 32)
  @IsOptional()
  @NotContains(' ')
  slug?: string;

  @IsOptional()
  description?: string | null;
}

export class StationUpdateManyInputDTO {
  @ValidateNested()
  @Type(() => StationUpdateManyDTO)
  data: StationUpdateManyDTO;

  where?: StationWhereInput;
}
