const checkSum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  let sumEl = 0;
  for (let el of arr) {
    sumEl += el;
  }

  if (sumEl > 100) {
    return true;
  }

  return false;
};

// examples
console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true
