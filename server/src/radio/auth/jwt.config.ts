import { Injectable } from '@nestjs/common';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
import { ConfigService } from '../../core/config/config.service';
import { EnvVariables } from '../../core/config/config.variables';

@Injectable()
export class JwtConfig implements JwtOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createJwtOptions(): JwtModuleOptions {
    return {
      secret: this.configService.get(EnvVariables.JWT_SECRET),
      signOptions: {
        expiresIn: this.configService.get(EnvVariables.JWT_TOKEN_EXPIRES_IN),
      },
    };
  }
}
