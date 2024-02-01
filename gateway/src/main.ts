import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerConfig from './configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // Not for production, just develop environments
  /*
  app.enableCors({
    origin: ['add url'],
    credentials: true,
  });
  */

  await swaggerConfig(app);

  await app.listen(3000);
}
bootstrap();
