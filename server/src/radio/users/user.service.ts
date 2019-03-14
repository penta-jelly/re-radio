import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import * as Bcrypt from 'bcrypt-nodejs';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaService } from 'prisma/prisma.service';
import { UserCreateInputDTO } from './dto/UserCreateInput.dto';
import { UserUpdateInputDTO } from './dto/UserUpdateInput.dto';
import { UserUpdateManyInputDTO } from './dto/UserUpdateManyInput.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(args: UserCreateInputDTO, info?: GraphQLResolveInfo | string) {
    args.data.password = await this.generateEncryptedPassword(args.data.password);
    // Generate username based on email address
    if (args.data.email && !args.data.username) {
      args.data.username = await this.generateUsername(args.data.email);
    }
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

  private async generateUsername(email: string) {
    let username: string = email.split('@')[0];
    if (!username) throw new InternalServerErrorException(`Can not generate user for email: ${email}`);
    let existedUser = await this.prisma.query.user({ where: { username } });
    while (existedUser) {
      if (Number(username.substr(-1))) {
        // If username ending with a number character,
        // increased the value by 1
        // TODO: What if the last number is 9?
        const prefix = username.substr(0, username.length - 1);
        const suffix = username.substr(-1);
        username = `${prefix}${Number(suffix) + 1}`;
      } else {
        username += '1';
      }
      existedUser = await this.prisma.query.user({ where: { username } });
    }
    return username;
  }
}
