import { IsPositive, Max } from 'class-validator';
import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class PaginationInput {
  @Field(type => Int, { nullable: true, description: 'Offset (paginated) where from entities should be taken.' })
  @IsPositive()
  skip: number = 0;

  @Field(type => Int, { nullable: true, description: 'Limit (paginated) - max number of entities should be taken.' })
  @IsPositive()
  @Max(1000)
  take: number = 10;
}
