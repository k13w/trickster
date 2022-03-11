import { Injectable } from '@nestjs/common';
import { HelloService } from './di/hello/hello.service';

@Injectable()
export class AppService {
  constructor(private readonly helloService: HelloService) {
    console.log(helloService);
  }

  getHello(): string {
    return this.helloService.getHello();
  }
}
