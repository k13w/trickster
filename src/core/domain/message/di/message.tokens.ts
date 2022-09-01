export class MessageTokens {
  // use cases
  public static readonly CreateMessage: unique symbol = Symbol('CreateMessage');

  // repository
  public static readonly MessageRepositoryPort: unique symbol =
    Symbol('MessageRepositoryPort');
}
