import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { Logger } from '@nestjs/common';
import { Context, Handler } from 'aws-lambda';

let server: any;

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

    const port = process.env.PORT || 3000;
    server = await app.listen(port);
    logger.log(`Aplicação rodando na porta ${port}`);
    
    return server;
  } catch (error) {
    logger.error(`Erro ao iniciar a aplicação: ${error.message}`);
    throw error;
  }
}

// Handler para AWS Lambda
export const handler: Handler = async (event: any, context: Context) => {
  server = server ?? await bootstrap();
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'NestJS está rodando no Lambda'
    })
  };
};

// Mantém o bootstrap para desenvolvimento local
if (process.env.NODE_ENV !== 'production') {
  bootstrap();
}
