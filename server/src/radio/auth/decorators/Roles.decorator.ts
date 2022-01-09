import { SetMetadata } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { UserRoleEnum } from '../../user/entities/user-role.entity';
import { User } from '../../user/entities/user.entity';

export const ROLE_KEY = 'roles';

export const Roles = (roles: AllowedRoles[]) => SetMetadata(ROLE_KEY, roles);

export type RoleWithValidateFn = (data: RoleDecoratorParam) => boolean | Promise<boolean>;

export type AllowedRoles = UserRoleEnum | RoleWithValidateFn;

export interface RoleDecoratorParam<Args = unknown> {
  user: User;
  args: Args;
  info: GraphQLResolveInfo;
}
