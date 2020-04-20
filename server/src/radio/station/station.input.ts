import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsOptional, MaxLength, NotContains, ValidateNested } from 'class-validator';
import { OrderEnum } from '../../core/graphql/input/order';

@InputType()
export class StationFindAllOrderInput {
  @Field((type) => OrderEnum, { nullable: true })
  id?: OrderEnum;

  @Field((type) => OrderEnum, { nullable: true })
  name?: OrderEnum;

  @Field((type) => OrderEnum, { nullable: true })
  slug?: OrderEnum;

  @Field((type) => OrderEnum, { nullable: true })
  createdAt?: OrderEnum;

  @Field((type) => OrderEnum, { nullable: true })
  updatedAt?: OrderEnum;
}

@InputType()
export class StationFindAllWhereInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;
}

@InputType()
export class StationFindOneWhereInput {
  @Field((type) => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  @MaxLength(64)
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  slug?: string;
}

@InputType()
export class StationTagCreateInput {
  @Field()
  @MaxLength(32)
  name: string;
}

@InputType()
export class StationCreateInput {
  @Field()
  @MaxLength(64)
  name: string;

  @Field()
  @NotContains(' ')
  slug: string;

  @Field({ nullable: true })
  @MaxLength(256)
  @IsOptional()
  description?: string;

  @Field((type) => [StationTagCreateInput], { nullable: true })
  @ValidateNested({ each: true })
  @Type(() => StationTagCreateInput)
  tags?: StationTagCreateInput[];
}

@InputType()
export class StationUpdateInput {
  @Field({ nullable: true })
  @MaxLength(64)
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @NotContains(' ')
  @IsOptional()
  slug?: string;

  @Field({ nullable: true })
  @MaxLength(256)
  @IsOptional()
  description?: string;
}
