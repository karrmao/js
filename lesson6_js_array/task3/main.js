function getSpecialNumbers(from, to) {
  let arrRes = [];
  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      arrRes.push(i);
    }
  }
  return arrRes;
}

//--test data
console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log(getSpecialNumbers(1, 2)); // ==> [ ]
