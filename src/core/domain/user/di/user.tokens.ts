export class UserTokens {
  // use cases
  public static readonly CreateUser: unique symbol = Symbol('CreateUser');
  public static readonly FindAllUsers: unique symbol = Symbol('FindAllUsers');

  // repository
  public static readonly UserRepositoryPort: unique symbol =
    Symbol('UserRepositoryPort');
}
