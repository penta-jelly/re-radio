import { Type } from 'class-transformer';
import { IsEmail, IsOptional, IsUrl, Length, ValidateNested } from 'class-validator';
import {
  StationUpdateManyWithoutOwnerInput,
  UserRoleUpdateManyWithoutUserInput,
  UserUpdateInput,
  UserWhereInput,
} from 'prisma/prisma.binding';

export class UserUpdateManyDTO implements UserUpdateInput {
  @IsEmail()
  @Length(6, 64)
  email?: string;

  @Length(6, 32)
  @IsOptional()
  username?: string;

  password?: string;

  @IsUrl()
  @IsOptional()
  coverUrl?: string;

  @IsUrl()
  @IsOptional()
  avatarUrl?: string;

  country?: string;

  city?: string;

  name?: string;

  roles?: UserRoleUpdateManyWithoutUserInput | null;
  stations?: StationUpdateManyWithoutOwnerInput | null;
}

export class UserUpdateManyInputDTO {
  @ValidateNested()
  @Type(() => UserUpdateManyDTO)
  data: UserUpdateManyDTO;

  where?: UserWhereInput | null;
}
