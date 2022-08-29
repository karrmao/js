//Algo
//1. Take value of amount with map
//2. Sumed all values with reduce

const getTotalRevenue = (transactions) => {
  return transactions.map((el) => el.amount).reduce((acc, el) => acc + el);
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);
