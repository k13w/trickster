import { NestFactory } from '@nestjs/core';
import { RootModule } from './application/modules/root.module';
import { grpcServerOptions } from './grpc.options';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  app.connectMicroservice(grpcServerOptions)

  await app.startAllMicroservices()
  await app.listen(3000);
}

bootstrap();
