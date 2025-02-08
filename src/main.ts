import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CSS_URL, JS_URL } from './customSwagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // 允许的来源
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 允许的方法
    credentials: true, // 允许携带凭证
  });
  const config = new DocumentBuilder()
    .setTitle('Api example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('test')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document, {
    jsonDocumentUrl: 'doc/json',
    customCssUrl: CSS_URL,
    customJs: JS_URL,
  });
  await app.listen(3102);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
