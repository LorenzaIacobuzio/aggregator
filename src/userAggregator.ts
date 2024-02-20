export class UserAggregator {
  userId: String;
  balance: Number;
  earned: Number;
  spent: Number;
  payout: Number;
  paidout: Number;

  constructor(userId, balance, earned, spent, payout, paidout) {
    this.userId = userId;
    this.balance = balance;
    this.earned = earned;
    this.spent = spent;
    this.payout = payout;
    this.paidout = paidout;
  }
}