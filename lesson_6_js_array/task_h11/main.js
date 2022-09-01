function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let copyArr = array.slice().sort((a, b) => a - b);
  let resArr = [];

  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] === copyArr[i - 1]) {
      copyArr.slice(i, 1);
    } else {
      resArr.push(copyArr[i]);
    }
  }
  return resArr;
  /***********/

  //   return [...new Set(array)];
}

//--test data
console.log(removeDuplicates([1, 1, 2, 2, 2, 2, 3, 4, 4, 6])); // => [1, 2, 3, 4, 6]
console.log(removeDuplicates([1, 2, 2, 2, 3, 4, 5, 5, 5, 7])); // => [1, 2, 3, 4, 5, 7]
