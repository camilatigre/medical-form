import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const getTypeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  url: configService.get('DATABASE_URL'),
  ssl: {
    rejectUnauthorized: false, // Necessário para conexões SSL do Neon
  },
  autoLoadEntities: true,
  synchronize: process.env.NODE_ENV !== 'production', // Desabilite em produção
}); 