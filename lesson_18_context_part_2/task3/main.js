//--option 1
//function sumOfSquers() {
//  return [].reduce.apply(arguments, [(acc, el) => acc + el * el]);
//}

 //--option2
console.log(sumOfSquers(1, 2, 3)); //=> 1 + 4 + 9 = 14
// function sumOfSquares() {
//   return [...arguments].map((el) => el * el).reduce((acc, el) => acc + el);
// }

 function sumOfSquares() {
   return [...arguments].reduce((acc, el) => acc + el * el);
 }
 //--data test
 console.log(sumOfSquares(1, 2, 3, 4));
//=>30