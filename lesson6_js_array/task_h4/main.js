const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let copyArr = arr.slice();

  let resArr = [];
  for (let el of copyArr) {
    if (el % 2 === 0) {
      resArr.push(el + delta);
    } else {
      resArr.push(el);
    }
  }
  return resArr;
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
