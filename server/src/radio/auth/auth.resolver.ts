import { Logger, UnprocessableEntityException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthService } from './auth.service';
import { LoginInputDTO } from './dto/LoginInput.dto';
import { RegisterInputDTO } from './dto/RegisterInput.dto';
import { LoginOrRegisterReturnType } from './interfaces/LoginOrRegisterReturnType.interface';

@Resolver()
export class AuthResolver {
  private logger = new Logger(AuthResolver.name);
  constructor(private readonly prisma: PrismaService, private readonly authService: AuthService) {}

  @Mutation('login')
  async login(@Args() loginDTO: LoginInputDTO): Promise<LoginOrRegisterReturnType> {
    const user = await this.authService.verifyUser(loginDTO.data);
    this.logger.log(`Generating JWT token for user ${user.username}`);
    const jwtToken = await this.authService.createToken(user);
    this.logger.log(`Generated JWT token for user ${user.username}`);
    return jwtToken;
  }

  @Mutation('register')
  async register(@Args() registerDTO: RegisterInputDTO): Promise<LoginOrRegisterReturnType> {
    try {
      const user = await this.authService.createUser({ data: registerDTO.data });
      this.logger.log(`Generating JWT token for user ${user.username}`);
      const jwtToken = await this.authService.createToken(user);
      this.logger.log(`Generated JWT token for user ${user.username}`);
      return jwtToken;
    } catch (error) {
      if (this.prisma.isViolatedUniqueConstraint(error)) {
        throw new UnprocessableEntityException(`User ${registerDTO.data.email} has already existed in the system.`);
      }
      throw error;
    }
  }
}
