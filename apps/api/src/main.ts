/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { config } from './config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();

  const swaggerOpts = new DocumentBuilder()
    .setTitle('fullstack')
    .setDescription('fullstack')
    .setVersion('1.0')
    .addTag('fullstack')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOpts);

  SwaggerModule.setup('/', app, document);

  await app.listen(config.port, () => {
    Logger.log('Listening on ' + config.port);
  });
}

bootstrap();
