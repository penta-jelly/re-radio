import { registerEnumType } from '@nestjs/graphql';

export enum OrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

registerEnumType(OrderEnum, {
  name: 'OrderEnum',
});
