let balance = 500.00;

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  get balance() {
    return this.transactions.reduce((sum, transaction) => sum + transaction.value, 0);
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}
class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  isAllowed() {
    return this.account.balance + this.value >= 0;
  }
  commit() {
    if (this.isAllowed()) {
      this.time = new Date();
      this.account.addTransaction(this);
      return true;
    }
    return false;
  }
}
class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;
  }
}
class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}
// Driver code
const myAccount = new Account("snow-patrol");
let t1 = new Withdrawal(50.25, myAccount);
t1.commit();
let t2 = new Withdrawal(9.99, myAccount);
t2.commit();
let t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Balance after transactions:', myAccount.balance);
console.log('Transaction history:', myAccount.transactions);
