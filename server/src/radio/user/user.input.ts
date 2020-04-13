import { IsEmail, IsOptional, IsUrl, MaxLength, MinLength } from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';
import { OrderEnum } from '../../core/graphql/input/order';

@InputType()
export class UserFindAllOrderInput {
  @Field(type => OrderEnum, { nullable: true })
  id?: OrderEnum;

  @Field(type => OrderEnum, { nullable: true })
  username?: OrderEnum;

  @Field(type => OrderEnum, { nullable: true })
  email?: OrderEnum;

  @Field(type => OrderEnum, { nullable: true })
  createdAt?: OrderEnum;

  @Field(type => OrderEnum, { nullable: true })
  updatedAt?: OrderEnum;

  @Field(type => OrderEnum, { nullable: true })
  name?: OrderEnum;

  @Field(type => OrderEnum, { nullable: true })
  country?: OrderEnum;

  @Field(type => OrderEnum, { nullable: true })
  city?: OrderEnum;

  @Field(type => OrderEnum, { nullable: true })
  reputation?: OrderEnum;
}

@InputType()
export class UserFindAllWhereInput {
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
export class UserFindOneWhereInput {
  @Field(type => Int, { nullable: true })
  id?: number;

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
export class UserCreateInput {
  @Field()
  @IsEmail()
  @MaxLength(64)
  email: string;

  @Field()
  @MaxLength(24)
  username: string;

  @Field()
  @MinLength(6)
  @MaxLength(64)
  password: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  @IsUrl()
  @IsOptional()
  avatarUrl?: string;

  @Field({ nullable: true })
  @IsUrl()
  @IsOptional()
  coverUrl?: string;

  @Field({ nullable: true })
  facebookId?: string;

  @Field({ nullable: true })
  googleId?: string;
}

@InputType()
export class UserUpdateInput {
  @Field({ nullable: true })
  @IsEmail()
  @MaxLength(64)
  @IsOptional()
  email?: string;

  @Field({ nullable: true })
  @MaxLength(24)
  @IsOptional()
  username?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  @IsUrl()
  @IsOptional()
  avatarUrl?: string;

  @Field({ nullable: true })
  @IsUrl()
  @IsOptional()
  coverUrl?: string;

  @Field({ nullable: true })
  facebookId?: string;

  @Field({ nullable: true })
  googleId?: string;
}
