const getWalueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNumber1 = getWalueWithDelay(56, 1000);
const asyncNumber2 = getWalueWithDelay(undefined, 2000);
const asyncNumber3 = getWalueWithDelay('10', 1000);

const getSum = (numbers) =>
  numbers
    .filter((value) => !isNaN(value))
    .feduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error(`Can't calculate`)));
};

asyncSum(asyncNumber1, asyncNumber2, asyncNumber3).then((result) =>
  console.log(result)
);
