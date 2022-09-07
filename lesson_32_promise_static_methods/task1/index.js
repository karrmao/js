const getWalueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('value');
      resolve(value);
    }, delay);
  });

const asyncNum1 = getWalueWithDelay(56, 1000);
const asyncNum2 = getWalueWithDelay(undefined, 2000);
const asyncNum3 = getWalueWithDelay('10', 1000);

const getSum = (numbers) =>
  numbers
    .filter((value) => !isNaN(value))
    .feduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error(`Can't calculate`)));
};

asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3).then(
  (result) => console.log(result)
);
