// const getSum = (arr) =>
//   arr.reduce(function (acc, num) {
//     console.log('acc :', acc);
//     console.log('num :', num);
//     return acc + num;
//   }, 0);

// const array = [1, 2, 3, 4];
// console.log(getSum(array));
// /*********************************************************************************/

// const flatArray = (arr) => {
//   const flatArray = arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);
//   return flatArray;
// };

// /***************************/
// //refac 1

// const flatArray2 = (arr) =>
//   arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);
// /*********************************************************************************/

// const flatArray3 = (arr) => {
//   return arr.flat();
// };

//-- test data
// const array2 = [1, [2, 3, 4], 5, [6]];
// console.log(flatArray(array2));
// console.log(flatArray2(array2));
// console.log(flatArray3(array2));
