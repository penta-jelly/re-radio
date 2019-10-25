import { StationDTO } from 'radio/station/dto/station.dto';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType('StationTag')
export class StationTagDTO {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => [StationDTO])
  stations: StationDTO[];
}
