import { registerEnumType } from '@nestjs/graphql';

export enum MutationEnum {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',
}

registerEnumType(MutationEnum, { name: 'MutationEnum' });

export interface BaseEntity {
  id: number;
}

export interface EntitySubscription<T extends BaseEntity> {
  mutation: MutationEnum;
  entity: T;
}
