const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client);
  //console.log(indexOfClient);

  if (balances[indexOfClient] < amount) {
    return -1;
  }

  return balances[indexOfClient] - amount;
};

//example 1:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

//output
//-1
//и массив balances должен быть [1400, 87, -6]