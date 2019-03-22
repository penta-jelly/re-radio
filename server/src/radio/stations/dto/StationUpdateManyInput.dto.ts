import { Type } from 'class-transformer';
import { IsOptional, Length, NotContains, ValidateNested } from 'class-validator';
import {
  StationTagUpdateManyWithoutStationsInput,
  StationUpdateInput,
  StationWhereInput,
  UserUpdateOneRequiredWithoutStationsInput,
} from '../../../prisma/prisma.binding';

export class StationUpdateManyDTO implements StationUpdateInput {
  @Length(2, 32)
  @IsOptional()
  name: string;

  @Length(2, 32)
  @IsOptional()
  @NotContains(' ')
  slug: string;

  @IsOptional()
  description?: string | null;

  owner?: UserUpdateOneRequiredWithoutStationsInput;
  tags?: StationTagUpdateManyWithoutStationsInput;
}

export class StationUpdateManyInputDTO {
  @ValidateNested()
  @Type(() => StationUpdateManyDTO)
  data: StationUpdateManyDTO;

  where?: StationWhereInput;
}
