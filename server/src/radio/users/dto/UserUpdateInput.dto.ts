import { Type } from 'class-transformer';
import { IsEmail, IsOptional, IsUrl, Length, ValidateNested } from 'class-validator';
import { FileUpload } from 'graphql-upload';
import { UserRoleUpdateManyWithoutUserInput, UserUpdateInput, UserWhereUniqueInput } from 'prisma/prisma.binding';

export class UserUpdateDTO implements UserUpdateInput {
  @IsEmail()
  @Length(6, 64)
  email?: string;

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

  roles?: UserRoleUpdateManyWithoutUserInput | null;
}

export class UserUpdateInputDTO {
  @ValidateNested()
  @Type(() => UserUpdateDTO)
  data: UserUpdateDTO;

  where: UserWhereUniqueInput;
}

export interface UserUpdateAvatarDTO {
  file: Promise<FileUpload>;
  where: UserWhereUniqueInput;
}
