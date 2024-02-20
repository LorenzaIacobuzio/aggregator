export class UserAggregator {
  userId: String;
  balance: Number;
  spent: Number;

  constructor(userId, balance, spent) {
    this.userId = userId;
    this.balance = balance;
    this.spent = spent;
  }
}