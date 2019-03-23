import { BadRequestException, Injectable } from '@nestjs/common';
import * as Bcrypt from 'bcrypt-nodejs';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { UserCreateInputDTO } from './dto/UserCreateInput.dto';
import { UserUpdateInputDTO } from './dto/UserUpdateInput.dto';
import { UserUpdateManyInputDTO } from './dto/UserUpdateManyInput.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(args: UserCreateInputDTO, info?: GraphQLResolveInfo | string) {
    args.data.password = await this.generateEncryptedPassword(args.data.password);
    return await this.prisma.mutation.createUser(args, info);
  }

  async updateUser(args: UserUpdateInputDTO, info?: GraphQLResolveInfo | string) {
    args.data.password = await this.generateEncryptedPassword(args.data.password);
    return await this.prisma.mutation.updateUser(args, info);
  }

  async updateManyUsers(args: UserUpdateManyInputDTO, info?: GraphQLResolveInfo | string) {
    if (args.data.password) {
      throw new BadRequestException('Password are not allowed to be updated in this action.');
    }
    return await this.prisma.mutation.updateManyUsers(args, info);
  }

  generateEncryptedPassword(rawPassword: string) {
    return Bcrypt.hashSync(rawPassword, Bcrypt.genSaltSync(8));
  }

  isValidPassword(passwordA: string, passwordB: string): boolean {
    return Bcrypt.compareSync(passwordA, passwordB);
  }
}
