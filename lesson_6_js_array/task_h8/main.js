function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min + max > 1000;
}

console.log(checker([1, 2, 3, 4]));
