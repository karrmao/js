const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * создай промис и присвой переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */

// update code below
/*************************************/
//option-1
 /*export */ const resultPromise = Promise.all([
   promiseNumber1,
   promiseNumber2,
   promiseNumber3,
 ]);

//option-2
//const promise = (...promiseNumbers) =>
//  new Promise((resolve) => {
//    return resolve(Promise.all(promiseNumbers));
//  });

//const resultPromise = promise(promiseNumber1, promiseNumber2, promiseNumber3);

//option-3
// const promise = (...promiseNumbers) => {
//   return Promise.resolve(Promise.all(promiseNumbers));
// };
// const resultPromise = promise(promiseNumber1, promiseNumber2, promiseNumber3);
/*************************************/

resultPromise
  .then((numbersList) => {
    console.log(numbersList);
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum;
  })
  .then((result) => {
    console.log(result); // 98
  });

//resultPromise(promiseNumber1, promiseNumber2, promiseNumber3);
