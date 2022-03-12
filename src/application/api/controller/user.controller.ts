import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserTokens } from '../../../core/domain/user/di/user.tokens';
import { CreateNewUser } from '../../../core/domain/user/usecase/create-new-user';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserTokens.CreateNewUser)
    private createNewUserUseCase: CreateNewUser,
  ) {}

  @Post()
  createNewUser(@Body() data) {
    return this.createNewUserUseCase.execute(data);
  }
}
