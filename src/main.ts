import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //auto-validation
  app.useGlobalPipes(new ValidationPipe());
  //Enable CORS for all origins
  app.enableCors();
  //set the global prefix
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
