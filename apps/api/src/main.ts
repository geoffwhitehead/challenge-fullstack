/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { config } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // TODO: Look into removing this
  app.enableCors();

  app.setGlobalPrefix('api');

  const swaggerOpts = new DocumentBuilder()
    .setTitle('fullstack')
    .setDescription('fullstack api description')
    .setVersion('1.0')
    .addTag('fullstack')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOpts);

  SwaggerModule.setup('/api', app, document);

  await app.listen(config().port, () => {
    Logger.log('Listening on ' + config().port);
  });
}

bootstrap();
