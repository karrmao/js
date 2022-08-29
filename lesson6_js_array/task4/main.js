function swap(numbers) {
  const [firstArr, ...restArr] = numbers;
  return [...restArr, firstArr];
}

function swapManual(numbers) {
  let res = [];
  for (let i = 1; i < numbers.length; i++) {
    res.push(numbers[i]);
  }
  res.push(numbers[0]);
  return res;
}

//--test data
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
