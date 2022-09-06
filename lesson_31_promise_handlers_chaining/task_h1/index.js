const successPromise = new Promise((resolve) => {
  resolve(32);
});

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

successPromise
  .then((number) => {
    const halfNumber = number / 2;
    return halfNumber;
  })
  .then((number) => {
    /* fix this handler */
    const squaredNumber = number * number;
    //console.log(squaredNumber);
    return squaredNumber;
  })
  .then((result) => {
    console.log(result); // 256
  });

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */
successPromise
  .then((number) => {
    /* fix this handler */
    const toMultiply = number * 10;
    return toMultiply;
  })
  .then((result) => {
    console.log(result); // 320
  });

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!'
);
