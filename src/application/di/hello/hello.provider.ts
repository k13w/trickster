import { Provider } from '@nestjs/common';
import { HelloService } from './hello.service';

export const HelloServiceProvider: Provider[] = [
  {
    provide: HelloService,
    useClass: HelloService,
  },
  {
    provide: 'TableName',
    useValue: 'tabela',
  },
];
