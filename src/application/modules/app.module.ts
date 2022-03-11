import { Module, Provider } from '@nestjs/common';
import { AppController } from '../api/controller/app.controller';
import { AppService } from '../app.service';
import { HelloServiceProvider } from '../di/hello/hello.provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ...HelloServiceProvider],
})
export class AppModule {}
