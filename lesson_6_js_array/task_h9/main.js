function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
    //console.log('balances[i] :', balances[i]);
    //console.log('amount :', amount);

    if (amount > balances[i]) {
      return -1;
    }

    if (client === clients[i]) {
      //console.log('client === clients[i] :', client === clients[i]);
      //console.log('balances[i] :', balances[i]);
      console.log('i :', i, clients[i]);

      return balances[i] - amount;
    }
    //return balances[client];
  }
}

//--test data
console.log(
  withdraw(['Anna', 'John', 'Kate'], [5000, 1200, 500], 'John', 1000)
); //=> 200
console.log(/******************************************************/);
console.log(
  withdraw(['Anna', 'John', 'Kate'], [5000, 1200, 500], 'Anna', 1000) // 4000
);

console.log(
  withdraw(['Anna', 'John', 'Kate'], [5000, 1200, 500], 'Kate', 1000)
); //=> -1
