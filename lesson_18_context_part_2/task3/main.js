// function sumOfSquares() {
//   return [...arguments].map((el) => el * el).reduce((acc, el) => acc + el);
// }

 //--option2

 function sumOfSquares() {
   return [...arguments].reduce((acc, el) => acc + el * el);
 }
 //--data test
 console.log(sumOfSquares(1, 2, 3, 4));
//=>30