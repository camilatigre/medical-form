import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { Logger } from '@nestjs/common';
import { HttpExceptionFilter } from './config/http-exception';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  try {
    config(); // Carrega as variáveis de ambiente
    logger.log('Variáveis de ambiente carregadas');

    const app = await NestFactory.create(AppModule);
    logger.log('Aplicação NestJS criada');

    // Configuração do CORS
    app.enableCors({
      origin: process.env.FRONTEND_URL || 'http://localhost:5173',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    });
    logger.log('CORS configurado');

    app.useGlobalFilters(new HttpExceptionFilter());

    const config = new DocumentBuilder()
      .setTitle('Example Documentation')
      .setDescription('API example')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    const port = process.env.PORT || 3001;
    await app.listen(port);
    logger.log(`Aplicação rodando na porta ${port}`);
  } catch (error) {
    logger.error(`Erro ao iniciar a aplicação: ${error.message}`);
    throw error;
  }
}

bootstrap();
