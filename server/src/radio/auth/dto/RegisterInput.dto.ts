import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, Length, ValidateNested } from 'class-validator';

export class RegisterDTO {
  @IsNotEmpty()
  @Length(6, 32)
  password: string;

  @IsEmail()
  @Length(6, 64)
  email: string;

  @Length(6, 32)
  @IsOptional()
  username?: string;
}

export class RegisterInputDTO {
  @ValidateNested()
  @Type(() => RegisterDTO)
  data: RegisterDTO;
}
