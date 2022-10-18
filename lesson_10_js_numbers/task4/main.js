// const getMaxAbsoluteNumber = (arr) => {
//   const getAbs = arr.map((el) => Math.abs(el));
//   console.log(getAbs);

//   const getMax = Math.max(...getAbs);
//   console.log(getMax);
// };

//ref
const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return Math.max(...arr.map((el) => Math.abs(el)));
};

//-test data
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
console.log(getMaxAbsoluteNumber([])); // ===> null
console.log(getMaxAbsoluteNumber(['string', 'number'])); // ===> NaN
console.log(getMaxAbsoluteNumber('string', 'number')); // ===> null
console.log(getMaxAbsoluteNumber(['string', 7])); // ===> NaN
