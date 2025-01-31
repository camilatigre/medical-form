import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  config(); // Carrega as variáveis de ambiente
  const app = await NestFactory.create(AppModule);

  // Configuração do CORS
  app.enableCors({
    origin: 'http://localhost:5173', // URL do seu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
