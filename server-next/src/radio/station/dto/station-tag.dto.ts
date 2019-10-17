import { StationDTO } from 'radio/station/dto/station.dto';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class StationTagDTO {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(type => [StationDTO])
  stations: StationDTO[];
}
