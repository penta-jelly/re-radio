import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginInput, RegisterInput } from 'radio/auth/auth.input';
import { User } from 'radio/user/entities/user.entity';
import { UserService } from 'radio/user/services/user.service';
import { JwtPayload } from './interfaces/JwtPayload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UserService)) private readonly userService: UserService,
  ) {}

  async createUser(data: RegisterInput): Promise<User> {
    let username = data.username;
    // Generate username based on email address
    if (data.email && !data.username) {
      username = await this.generateUsername(data.email);
    }
    return this.userService.create({ ...data, username });
  }

  async verifyUser(loginDTO: LoginInput): Promise<User> {
    const { username, email, password: rawPassword } = loginDTO;
    if (!username && !email) throw new BadRequestException();
    const condition = username ? { username } : { email };
    const user = await this.userService.findOneOrFail({ where: condition });
    if (!this.userService.isValidPassword(rawPassword, user.password)) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async createToken(user: User): Promise<string> {
    const { username, email, password } = user;
    const jwtPayload: JwtPayload = { username, email, password };
    return this.jwtService.sign(jwtPayload);
  }

  async validateUserFromJWTPayload(payload: JwtPayload): Promise<User> {
    const { username, email, password } = payload;
    const user = await this.userService.findOneOrFail({ where: { username, email } });
    if (user.password !== password) throw new UnauthorizedException();
    return user;
  }

  private async generateUsername(email: string) {
    let username: string = email.split('@')[0];
    if (!username) throw new InternalServerErrorException(`Can not generate user for email: ${email}`);
    let numberOfExistedUsers = await this.userService.count({ where: { username } });
    while (numberOfExistedUsers > 0) {
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
      numberOfExistedUsers = await this.userService.count({ where: { username } });
    }
    return username;
  }
}
