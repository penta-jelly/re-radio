import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'prisma/prisma.binding';
import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from '../users/user.service';
import { LoginDTO } from './dto/LoginInput.dto';
import { RegisterInputDTO } from './dto/RegisterInput.dto';
import { JwtPayload } from './interfaces/JwtPayload.interface';
import { LoginOrRegisterReturnType } from './interfaces/LoginOrRegisterReturnType.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => UsersService)) private readonly usersService: UsersService,
  ) {}

  async createUser(args: RegisterInputDTO) {
    let username = args.data.username;
    // Generate username based on email address
    if (args.data.email && !args.data.username) {
      username = await this.generateUsername(args.data.email);
    }
    return this.usersService.createUser({ data: { ...args.data, username } });
  }

  async verifyUser(loginDTO: LoginDTO) {
    const { username, email, password: rawPassword } = loginDTO;
    if (!username && !email) throw new BadRequestException();
    const user = await this.prisma.query.user({ where: { username, email } });
    if (!user || !this.usersService.isValidPassword(rawPassword, user.password)) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async createToken(user: User): Promise<LoginOrRegisterReturnType> {
    const { username, email, password } = user;
    const jwtPayload: JwtPayload = { username, email, password };
    const token = this.jwtService.sign(jwtPayload);
    return {
      token,
    };
  }

  async validateUserFromJWTPayload(payload: JwtPayload): Promise<User> {
    const { username, email, password } = payload;
    let users: User[];
    try {
      users = await this.prisma.query.users({ where: { username, email } });
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
    if (users.length === 0) {
      throw new UnauthorizedException('User not found');
    }
    if (users.length > 1) {
      throw new InternalServerErrorException('JWT is broken due to duplicated query results for 1 unique user');
    }
    const [user] = users;
    if (user.password !== password) throw new UnauthorizedException();
    return user;
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
