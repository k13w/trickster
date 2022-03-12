export class UserTokens {
  // use cases
  public static readonly CreateNewUser: unique symbol = Symbol('CreateNewUser');

  // repository
  public static readonly UserRepositoryPort: unique symbol =
    Symbol('UserRepositoryPort');
}
