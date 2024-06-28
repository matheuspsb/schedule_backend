// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const isDev = String(process.env.IS_DEVELOPMENT).toLowerCase() === 'true';
  const app = await NestFactory.create(AppModule);

  const swagger = new DocumentBuilder()
    .setTitle('Scheudle OfficeCom')
    .setDescription('API do sistema de agendas OfficeCom')
    .setVersion('1.0.0')
    .addBearerAuth({ type: 'http' }, 'Authorization')
    .build();
  const document = SwaggerModule.createDocument(app, swagger);
  if (isDev) SwaggerModule.setup('docs', app, document);

  app.enableCors();
  return app;
}

if (require.main === module) {
  bootstrap().then(app => app.listen(process.env.PORT || 3000));
}

export default bootstrap;
