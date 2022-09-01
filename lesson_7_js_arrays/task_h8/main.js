// function arrAverage(arr) {
//   function reduceCallback(acc, el) {
//     return acc + el;
//   }
//   return arr.reduce(reduceCallback) / arr.length;
// }

// //ref1
// function arrAverage(arr) {
//   return (
//     arr.reduce(function reduceCallback(acc, el) {
//       return acc + el;
//     }) / arr.length
//   );
// }

// //ref2
// function arrAverage(arr) {
//   return (
//     arr.reduce((acc, el) => {
//       return acc + el;
//     }) / arr.length
//   );
// }

// //ref3
// function arrAverage(arr) {
//   return arr.reduce((acc, el) => acc + el) / arr.length;
// }

// //ref4
// const arrAverage = (arr) => {
//   return arr.reduce((acc, el) => acc + el) / arr.length;
// };

//ref5
const arrAverage = (arr) => arr.reduce((acc, el) => acc + el) / arr.length;

console.log(arrAverage([2, 5, 6, 3])); //=>4
