import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // 允许的来源
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 允许的方法
    credentials: true, // 允许携带凭证
  });
  await app.listen(3101);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
