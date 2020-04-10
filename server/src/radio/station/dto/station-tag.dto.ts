import { Field, Int, ObjectType } from '@nestjs/graphql';
import { StationDTO } from 'radio/station/dto/station.dto';

@ObjectType('StationTag')
export class StationTagDTO {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => [StationDTO])
  stations: StationDTO[];
}
