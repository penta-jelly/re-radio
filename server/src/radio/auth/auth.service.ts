import { BadRequestException, forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from 'core/config/config.service';
import { User } from 'prisma/prisma.binding';
import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from 'radio/users/user.service';
import { LoginDTO } from './dto/LoginInput.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => UsersService)) private readonly usersService: UsersService,
  ) {}

  async verifyUser(loginDTO: LoginDTO) {
    const { username, email, password: rawPassword } = loginDTO;
    if (!username && !email) throw new BadRequestException();
    const user = await this.prisma.query.user({ where: { username, email } });
    if (!user || !this.usersService.isValidPassword(rawPassword, user.password)) {
      throw new UnauthorizedException('User not found.');
    }
    return user;
  }

  async createToken(user: User) {
    const { username, email, password } = user;
    const jwtPayload: JwtPayload = { username, email, password };
    const token = this.jwtService.sign(jwtPayload);
    return {
      token,
    };
  }

  async validateUserFromJWTPayload(payload: JwtPayload): Promise<User> {
    const { username, email, password } = payload;
    const user = await this.prisma.query.user({ where: { username, email } });
    if (!user || user.password !== password) throw new UnauthorizedException('User not found.');
    return user;
  }
}
