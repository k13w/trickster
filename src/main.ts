import 'module-alias/register';
import { NestFactory } from '@nestjs/core';
import { RootModule } from './application/modules/root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  await app.startAllMicroservices();

  app.enableCors();

  const port = process.env.PORT || 3000

  await app.listen(port);
}

bootstrap();
