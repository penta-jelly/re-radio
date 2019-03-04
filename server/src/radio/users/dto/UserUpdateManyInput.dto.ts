import { UserUpdateInput, UserWhereInput } from 'prisma/prisma.binding';
import { Length, IsOptional, ValidateNested, IsEmail, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

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
}

export class UserUpdateManyInputDTO {
  @ValidateNested()
  @Type(() => UserUpdateManyDTO)
  data: UserUpdateManyDTO;

  where?: UserWhereInput | null;
}
