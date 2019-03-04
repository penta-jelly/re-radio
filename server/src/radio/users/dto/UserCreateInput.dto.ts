import { UserCreateInput } from 'prisma/prisma.binding';
import { Length, IsOptional, ValidateNested, IsEmail, IsNotEmpty, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

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
  username?: string;
}

export class UserCreateInputDTO {
  @ValidateNested()
  @Type(() => UserCreateDTO)
  data: UserCreateDTO;
}
