/*export*/ class Wallet {
  balance = 0;
  // constructor() {
  //   this.balance = 0;
  // }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`No enough funds`);
      return;
    }
    this.balance -= amount;
  }
}

const wallet = new Wallet();
console.log(wallet.getBalance());
//=> 0

wallet.deposit(45);
console.log(wallet.getBalance());
//=> 45

wallet.withdraw(34);
//=> -34
console.log(wallet.getBalance());
//=>11

wallet.withdraw(100);
//=> No enough funds

console.log(wallet.getBalance());
//=> 11
