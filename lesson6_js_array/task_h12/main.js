function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return [...new Set(array)].length;
}

//--test data
console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8])); // => [1, 2, 3, 4, 6]
