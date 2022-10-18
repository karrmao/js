//option-1
//function cleanTransactionsList(arr) {
//  return String(arr)
//    .trim()
//    .split(',')
//    .filter((el) => !/[a-zA-Z]/.test(el))
//    .map((el) => '$' + (+el).toFixed(2));
//}

//option-2
//function cleanTransactionsList(arr) {
//  return arr
//    .filter((el) => !/[a-zA-Z]/.test(el))
//    .map((el) => '$' + (+el).toFixed(2));
//}

//option-3
const cleanTransactionsList = (arr) => {
  return arr
   
	  .filter((element) => !isNaN(element))
    .map((element) => '$' + (+element).toFixed(2));
};

//-data test
const firstArr = ['  1.9 ', '16.4', 17, '2dollars'];
console.log(cleanTransactionsList(firstArr));
//=> ['$1.90', '$16.40', '$17.00']

const secondArr = [1, 2, 3, 4, 5, '2dollars'];
console.log(cleanTransactionsList(secondArr));
//==> ['$1.00', '$2.00', '$3.00', '$4.00', '$5.00']

//typeof +element === 'number' && !isNaN(x))