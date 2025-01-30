import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    // Verifica se já existe um usuário com este email
    const existingUser = await this.usersRepository.findOne({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email já cadastrado');
    }

    // Cria o hash da senha
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Cria o novo usuário
    const user = this.usersRepository.create({
      ...registerDto,
      password_hash: hashedPassword,
    });

    // Salva o usuário no banco
    const savedUser = await this.usersRepository.save(user);

    // Remove a senha do objeto de retorno
    const { password_hash, ...result } = savedUser;

    return result;
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersRepository.findOne({
      where: { email: loginDto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password_hash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { 
      sub: user.id, 
      email: user.email,
      name: user.name
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    };
  }
} 