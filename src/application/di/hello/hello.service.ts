import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  constructor(@Inject('TableName') private tableName: string) {}

  getHello(): string {
    return this.tableName;
  }
}
