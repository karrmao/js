// const getSpecialNumbers = (arr) => {
//   return arr.filter((num) => {
//     if (num % 3 === 0) {
//       return num;
//     }
//   });
// };

/**********/
//ref1

const getSpecialNumbers = (arr) => {
  return arr.filter((num) => num % 3 === 0);
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getSpecialNumbers(array));