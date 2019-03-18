import { SetMetadata } from '@nestjs/common';
import { UserRoleEnum } from 'prisma/prisma.binding';

export const ROLE_KEY = 'roles';

export const Roles = (...roles: UserRoleEnum[]) => SetMetadata(ROLE_KEY, roles);
