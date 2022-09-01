function cleanTransactionsList(arr) {
  return String(arr)
    .trim()
    .split(',')
    .filter((el) => !/[a-zA-Z]/.test(el))
    .map((el) => '$' + (+el).toFixed(2));
}

//-data test
console.log(cleanTransactionsList(['  1.9 ', '16.4', 17, '2dollars', 'sd4sg']));
//=> ['$1.90', '$16.40', '$17.00']