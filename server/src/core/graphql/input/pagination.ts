import { IsOptional, IsPositive, Max, Min } from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PaginationInput {
  @Field((type) => Int, {
    nullable: true,
    description: 'Offset (paginated) where from entities should be taken. Default: 0',
  })
  @Min(0)
  @IsOptional()
  skip: number = 0;

  @Field((type) => Int, {
    nullable: true,
    description: 'Limit (paginated) - max number of entities should be taken. Default: 10',
  })
  @IsPositive()
  @Max(1000)
  @IsOptional()
  take: number = 10;
}
