import { Logger, forwardRef, Inject } from '@nestjs/common';
import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from './auth.service';
import { LoginInputDTO } from './dto/LoginInput.dto';
import { RegisterInputDTO } from './dto/RegisterInput.dto';
import { UsersService } from 'radio/users/user.service';

@Resolver()
export class AuthResolver {
  private logger = new Logger(AuthResolver.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
    @Inject(forwardRef(() => UsersService)) private readonly usersService: UsersService,
  ) {}

  @Mutation('login')
  async login(@Args() loginDTO: LoginInputDTO) {
    const user = await this.authService.verifyUser(loginDTO.data);
    this.logger.log(`Generate JWT token for user ${user.username}`);
    const jwtToken = await this.authService.createToken(user);
    this.logger.log(`Generated JWT token for user ${user.username}`);

    return {
      token: jwtToken.token,
    };
  }

  @Mutation('register')
  async register(@Args() registerDTO: RegisterInputDTO) {
    await this.usersService.createUser({ data: registerDTO.data });
    return true;
  }
}
