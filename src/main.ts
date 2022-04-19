import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  console.log(`Starting with ${process.env.NODE_ENV}`);
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  // Swagger Config
  const config = new DocumentBuilder()
    .setTitle('산악회 홈페이지 API')
    .setVersion('1.0')
    .setContact('정지현', '', 'dinb1242@naver.com')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}

bootstrap();
