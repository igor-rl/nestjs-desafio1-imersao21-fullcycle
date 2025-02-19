import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); // Define o prefixo "/api" para todas as rotas

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();