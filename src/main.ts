import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()

    //configuration for documentation
    .setTitle('Boxfull Shiptment')
    .setDescription('The Shiptment API description')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('document', app, documentFactory);
  //auto-validation
  app.useGlobalPipes(new ValidationPipe());
  //Enable CORS for all origins
  app.enableCors();
  //set the global prefix
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
