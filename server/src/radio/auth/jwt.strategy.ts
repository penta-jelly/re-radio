import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '../../core/config/config.service';
import { EnvVariables } from '../../core/config/config.variables';
import { AuthService } from './auth.service';
import { JwtPayload } from './interfaces/JwtPayload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService, private readonly authService: AuthService) {
    super({
      // Only take the JWT token from either "authorization" or "Authorization" headers
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromHeader('authorization'),
        ExtractJwt.fromHeader('Authorization'),
      ]),
      secretOrKey: configService.get(EnvVariables.JWT_SECRET),
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authService.validateUserFromJWTPayload(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
