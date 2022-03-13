import { Controller, Inject } from '@nestjs/common';
import { UserTokens } from '../../../core/domain/user/di/user.tokens';
import { CreateNewUser } from '../../../core/domain/user/usecase/create-new-user';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserTokens.CreateNewUser)
    private createNewUserUseCase: CreateNewUser,
  ) {}

  @GrpcMethod('UserService', 'Create')
  createNewUser(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>): any {
    return this.createNewUserUseCase.execute(data);
  }
}
