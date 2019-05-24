import { Type } from 'class-transformer';
import { IsOptional, Length, NotContains, ValidateNested } from 'class-validator';
import {
  StationCreateInput,
  StationTagCreateManyWithoutStationsInput,
  UserRoleCreateManyWithoutStationInput,
} from 'prisma/prisma.binding';

export class StationCreateDTO implements StationCreateInput {
  @Length(2, 32)
  name: string;

  @Length(2, 32)
  @NotContains(' ')
  slug: string;

  @IsOptional()
  description?: string;

  tags?: StationTagCreateManyWithoutStationsInput;
  userRoles?: UserRoleCreateManyWithoutStationInput;
}

export class StationCreateInputDTO {
  @ValidateNested()
  @Type(() => StationCreateDTO)
  data: StationCreateDTO;
}
