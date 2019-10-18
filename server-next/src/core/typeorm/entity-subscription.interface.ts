import { registerEnumType } from 'type-graphql';

export enum MutationEnum {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',
}

registerEnumType(MutationEnum, { name: 'MutationEnum' });

export interface BaseEntity {
  id: number;
}

export type EntitySubscription<T extends BaseEntity> =
  | CreatedEntitySubscription<T>
  | UpdatedEntitySubscription<T>
  | DeletedEntitySubscription<T>;

export interface CreatedEntitySubscription<T extends BaseEntity> {
  mutation: MutationEnum.CREATED;
  entity: T;
}
export interface UpdatedEntitySubscription<T extends BaseEntity> {
  mutation: MutationEnum.UPDATED;
  entity: T;
}

export interface DeletedEntitySubscription<T extends BaseEntity> {
  mutation: MutationEnum.DELETED;
  entityId: Pick<T, 'id'>;
}
