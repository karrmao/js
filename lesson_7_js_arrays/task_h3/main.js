// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   function evenNumber(numb) {
//     let newArr = 0;

//     if (numb % 2 === 0) {
//       return (newArr = numb + delta);
//     } else {
//       return (newArr = numb);
//     }
//   }

//   return arr.map(evenNumber);
// };

// //ref1
// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   function evenNumber(numb) {
//     if (numb % 2 === 0) {
//       return numb + delta;
//     } else {
//       return numb;
//     }
//   }

//   return arr.map(evenNumber);
// };

//ref2
// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map(function evenNumber(numb) {
//     if (numb % 2 === 0) {
//       return numb + delta;
//     } else {
//       return numb;
//     }
//   });
// };

//ref3
// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map(function (numb) {
//     if (numb % 2 === 0) {
//       return numb + delta;
//     } else {
//       return numb;
//     }
//   });
// };

//ref4
// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map((numb) => {
//     if (numb % 2 === 0) {
//       return numb + delta;
//     } else {
//       return numb;
//     }
//   });
// };

//ref5
// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map((numb) => {
//     return numb % 2 === 0 ? numb + delta : numb;
//   });
// };

//ref5
const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map((numb) => (numb % 2 === 0 ? numb + delta : numb));
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
