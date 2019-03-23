import { SetMetadata } from '@nestjs/common';
import { UserRoleEnum, User } from '../../../prisma/prisma.binding';

export const ROLE_KEY = 'roles';

export const Roles = (...roles: AllowedRoles[]) => SetMetadata(ROLE_KEY, roles);

export type RoleWithValidateFn = ['STATION_OWNER', (user: User, args: unknown) => boolean];

export type AllowedRoles = 'ADMIN' | RoleWithValidateFn;
