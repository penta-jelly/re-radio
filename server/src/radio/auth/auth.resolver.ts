import { Logger, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDTO } from 'radio/user/dto/user.dto';
import { User } from 'radio/user/entities/user.entity';
import { AuthenticationDTO } from './auth.dto';
import { LoginInput, RegisterInput } from './auth.input';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/CurrentUser.decorator';
import { AuthenticationGuard } from './guards/Authentication.guard';

@Resolver(of => UserDTO)
export class AuthResolver {
  private logger = new Logger(AuthResolver.name);
  constructor(private readonly authService: AuthService) {}

  @Query(returns => UserDTO)
  @UseGuards(AuthenticationGuard)
  async currentUser(@CurrentUser() user: User) {
    return user;
  }

  @Mutation(returns => AuthenticationDTO)
  async login(@Args({ name: 'data', type: () => LoginInput }) data: LoginInput): Promise<AuthenticationDTO> {
    const user = await this.authService.verifyUser(data);
    this.logger.log(`Generating JWT token for user ${user.username}`);
    const jwtToken = await this.authService.createToken(user);
    this.logger.log(`Generated JWT token for user ${user.username}`);
    return { token: jwtToken };
  }

  @Mutation(returns => AuthenticationDTO)
  async register(@Args({ name: 'data', type: () => RegisterInput }) data: RegisterInput): Promise<AuthenticationDTO> {
    const user = await this.authService.createUser(data);
    this.logger.log(`Generating JWT token for user ${user.username}`);
    const jwtToken = await this.authService.createToken(user);
    this.logger.log(`Generated JWT token for user ${user.username}`);
    return { token: jwtToken };
  }
}
