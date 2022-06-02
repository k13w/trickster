import 'module-alias/register'
import { NestFactory } from '@nestjs/core';
import { RootModule } from './application/modules/root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  await app.startAllMicroservices()
  await app.listen(3000);
}

bootstrap();
