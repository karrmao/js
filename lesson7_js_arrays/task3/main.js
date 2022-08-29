const flatArray = (arr) => {
  return arr.flat(Infinity).sort((a, b) => a - b);
};

const array = [3, 2, [1, 4, [5, 9, 10], 8], 6, 7];
console.log(flatArray(array));