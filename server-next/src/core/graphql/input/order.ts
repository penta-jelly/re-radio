import { registerEnumType } from 'type-graphql';

export enum OrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

registerEnumType(OrderEnum, {
  name: 'OrderEnum',
});
