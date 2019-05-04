import { Type } from 'class-transformer';
import { IsOptional, Length, NotContains, ValidateNested } from 'class-validator';
import {
  StationTagUpdateManyWithoutStationsInput,
  StationUpdateInput,
  StationWhereUniqueInput,
  UserUpdateOneRequiredWithoutStationsInput,
} from 'prisma/prisma.binding';

export class StationUpdateDTO implements StationUpdateInput {
  @Length(2, 32)
  @IsOptional()
  name?: string;

  @Length(2, 32)
  @IsOptional()
  @NotContains(' ')
  slug?: string;

  @IsOptional()
  description?: string | null;

  owner?: UserUpdateOneRequiredWithoutStationsInput;
  tags?: StationTagUpdateManyWithoutStationsInput;
}

export class StationUpdateInputDTO {
  @ValidateNested()
  @Type(() => StationUpdateDTO)
  data: StationUpdateDTO;

  where: StationWhereUniqueInput;
}
