import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, IsUrl, Length, ValidateNested } from 'class-validator';
import {
  StationCreateManyWithoutOwnerInput,
  UserCreateInput,
  UserRoleCreateManyWithoutUserInput,
} from 'prisma/prisma.binding';

export class UserCreateDTO implements UserCreateInput {
  @IsNotEmpty()
  @Length(6, 32)
  password: string;

  @IsUrl()
  @IsOptional()
  coverUrl?: string;

  @IsUrl()
  @IsOptional()
  avatarUrl?: string;

  country?: string;

  city?: string;

  name?: string;

  @IsEmail()
  @Length(6, 64)
  email: string;

  @Length(6, 32)
  @IsOptional()
  username: string;

  roles?: UserRoleCreateManyWithoutUserInput | null;
  stations?: StationCreateManyWithoutOwnerInput | null;
}

export class UserCreateInputDTO {
  @ValidateNested()
  @Type(() => UserCreateDTO)
  data: UserCreateDTO;
}
