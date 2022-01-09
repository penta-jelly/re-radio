import { IsEmail, IsNotEmpty, IsOptional, Length, MaxLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field()
  @IsNotEmpty()
  @Length(4, 32)
  password: string;

  @Field({ nullable: true })
  @IsEmail()
  @MaxLength(64)
  @IsOptional()
  email?: string;

  @Field({ nullable: true })
  @MaxLength(24)
  @IsOptional()
  username?: string;
}

@InputType()
export class RegisterInput {
  @Field()
  @IsNotEmpty()
  @Length(6, 32)
  password: string;

  @Field({ nullable: true })
  @IsEmail()
  @MaxLength(64)
  email: string;

  @Field({ nullable: true })
  @MaxLength(24)
  @IsOptional()
  username?: string;
}
