import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'sua-chave-secreta', // Use a mesma chave secreta do AuthModule
    });
  }

  async validate(payload: any) {
    console.log(payload);
    return {
      sub: payload.sub,
      email: payload.email,
      name: payload.name
    };
  }
} 