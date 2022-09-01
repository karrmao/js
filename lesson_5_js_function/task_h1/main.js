function getSum(a, b) {
  let result = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      console.log('i : ' + i);
      result += i;
    }
  }
  return result;
}

console.log(getSum(2, 8));
