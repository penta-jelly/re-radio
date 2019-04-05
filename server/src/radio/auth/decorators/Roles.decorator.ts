import { SetMetadata, HttpException } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { User } from '../../../prisma/prisma.binding';
import { PrismaService } from '../../../prisma/prisma.service';

export const ROLE_KEY = 'roles';

export const Roles = (roles: AllowedRoles[]) => SetMetadata(ROLE_KEY, roles);

export type RoleWithValidateFn = (data: RoleDecoratorParam) => boolean | Promise<boolean>;

export type AllowedRoles = 'ADMIN' | RoleWithValidateFn;

export interface RoleDecoratorParam<Args = unknown> {
  user: User;
  args: Args;
  info: GraphQLResolveInfo;
  services: {
    prisma: PrismaService;
  };
}
