// const asyncCalculator = (num) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Initial value: ${num}`);
//       resolve(num);
//     }, 300);
//   }).then(
//     (value) =>
//       new Promise((resolve) => {
//         setTimeout(() => {
//           const result = value * value;
//           console.log(`Squared value: ${result}`);
//           resolve(result);
//         }, 300);
//       })
//   );

// const p = asyncCalculator(4)
//   .then((value) => {
//     const result = value * 2;
//     console.log(`Doubled value: ${result}`);
//     return result;
//   })
//   .then((value) => console.log(value));
// //=> Initial value: 4
// //=> Squared value: 16
// //=> Doubled value: 32
// //=> 32
/******************************************/
export const asyncCalculator = (num) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 300);
  })
    .then(
      (num) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const result = num * num;
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 500);
        })
    )
    .then(
      (num) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const result = num * 2;
            console.log(`Doubled value: ${result}`);
            resolve(result);
          }, 500);
        })
    );

//-- test data
asyncCalculator(5);
//=> Initial value: 5
//=> Squared value: 25
//=> Doubled value: 50
