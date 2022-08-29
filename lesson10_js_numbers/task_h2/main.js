const getRandomNumbers = (length, from, to) => {
  const fromCeil = Math.ceil(from);
  const toCeil = Math.ceil(to);


  if (toCeil - fromCeil < 1) {
    return null;
  }
  return new Array(length).fill(
    Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil)
  );
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]

console.log('null : 1', getRandomNumbers(7, 1.4, 1.9)); // ==> null
console.log('null : 2', getRandomNumbers(7, 2.11, 2.9)); // ==> null
console.log('null : 3', getRandomNumbers(1, 2.5, 0.9)); // ==> null
