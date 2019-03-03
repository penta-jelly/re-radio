import { UserUpdateInput, UserRoleUpdateManyWithoutUserInput, UserWhereUniqueInput } from 'prisma/prisma.binding';
import { Length, IsOptional, ValidateNested, IsEmail, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export class UserUpdateDTO implements UserUpdateInput {
  @IsEmail()
  @Length(6, 64)
  email: string;

  @Length(6, 32)
  @IsOptional()
  username?: string;

  @IsOptional()
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

  bio?: string;

  facebookId?: string;

  googleId?: string;

  reputation?: number;

  roles?: UserRoleUpdateManyWithoutUserInput;
}

export class UserUpdateInputDTO {
  @ValidateNested()
  @Type(() => UserUpdateDTO)
  data: UserUpdateDTO;

  where: UserWhereUniqueInput;
}
