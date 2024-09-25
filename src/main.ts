import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('FormApp API')
    .setDescription('The FormApp API description')
    .setVersion('1.0')
    .addTag('Contact')
    .addTag('Contract')
    .addTag('Course')
    .addTag('Formation')
    .addTag('FormationCenter')
    .addTag('Info')
    .addTag('Intermediaire')
    .addTag('Intervention')
    .addTag('Mission')
    .addTag('Pricing')
    .addTag('Subject')
    .addTag('Task')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
