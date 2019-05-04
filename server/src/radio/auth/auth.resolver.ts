import { Logger, UnprocessableEntityException, UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'prisma/prisma.binding';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/CurrentUser.decorator';
import { LoginInputDTO } from './dto/LoginInput.dto';
import { RegisterInputDTO } from './dto/RegisterInput.dto';
import { AuthenticationGuard } from './guards/Authentication.guard';
import { LoginOrRegisterReturnType } from './interfaces/LoginOrRegisterReturnType.interface';

@Resolver()
export class AuthResolver {
  private logger = new Logger(AuthResolver.name);
  constructor(private readonly prisma: PrismaService, private readonly authService: AuthService) {}

  @Query('currentUser')
  @UseGuards(AuthenticationGuard)
  async currentUser(@CurrentUser() user: User, @Info() info): Promise<User> {
    return this.prisma.query.user({ where: { id: user.id } }, info);
  }

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
