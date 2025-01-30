import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      return await this.authService.register(registerDto);
    } catch (error) {
      throw new HttpException(
        error.message || 'Erro no registro',
        error.status || HttpStatus.BAD_REQUEST
      );
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      const result = await this.authService.login(loginDto);
      return result;
    } catch (error) {
      throw new HttpException(
        error.message || 'Erro na autenticação',
        error.status || HttpStatus.UNAUTHORIZED
      );
    }
  }
} 