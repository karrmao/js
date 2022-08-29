// const getSpecialNumbers = (numbers) => {

//   function callBackGetSpacialNumbers(num) {
//     if (num % 3 === 0) {
//       return true; //=> [3, 6, 9]
//     } else {
//       return false;
//     }
//   }

//   let result = numbers.filter(callBackGetSpacialNumbers);

//   /************************************************************/

//   let result2 = numbers.filter(function callBackGetSpacialNumbers(num) {
//     if (num % 3 === 0) {
//       return true; //=> [3, 6, 9]
//     } else {
//       return false;
//     }
//   });

//   return result;
// };

// const arr = [1, 2, 3, 4, 5, 6, 9, 18];
// console.log(getSpecialNumbers(arr));

/************************************************************/
const getSpecialNumbers = (numbers) => {
  let result = numbers.filter((num) => {
    if (num % 3 === 0) {
      return true; //=> [3, 6, 9]
    } else {
      return false;
    }
  });

  /************************************************************/
  //redfact 1
  let result2 = numbers.filter((num) => {
    return num % 3 === 0 ? true : false;
  });

  /************************************************************/
  //redfact 2
  let result3 = numbers.filter((num) => (num % 3 === 0 ? true : false));

  /************************************************************/
  //redfact 3
  let result4 = numbers.filter((num) => num % 3 === 0);

  /************************************************************/
  //redfact 3
  let result5 = numbers.filter((num) => {
    return num % 3 === 0;
  });
  /************************************************************/

  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 9, 18];
console.log(getSpecialNumbers(arr));
