import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, Length, ValidateNested } from 'class-validator';

export class LoginDTO {
  @IsNotEmpty()
  @Length(6, 32)
  password: string;

  @IsEmail()
  @Length(6, 64)
  @IsOptional()
  email?: string;

  @Length(6, 32)
  @IsOptional()
  username?: string;
}

export class LoginInputDTO {
  @ValidateNested()
  @Type(() => LoginDTO)
  data: LoginDTO;
}
