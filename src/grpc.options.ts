import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path'

export const grpcServerOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5000',
    package: 'user',
    protoPath: join(__dirname, 'proto/user.proto'),
  },
}
