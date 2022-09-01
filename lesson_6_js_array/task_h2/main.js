function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let restArr = [];
  for (let el of arr) {
    restArr.push(el * el);
  }
  return restArr;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
