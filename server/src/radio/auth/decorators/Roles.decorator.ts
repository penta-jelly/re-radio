import { ReflectMetadata } from '@nestjs/common';
import { UserRoleEnum } from 'prisma/prisma.binding';

export const ROLE_KEY = 'roles';

export const Roles = (...roles: UserRoleEnum[]) => ReflectMetadata(ROLE_KEY, roles);
