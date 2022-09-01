//put your code here
function findDivCount(a, b, n) {
  let result = 0;
  for (let i = a; i <= b; i++) {
    //(1, 7, 2)=> 1,2,3,4,5,6,7

    const crat = i % n === 0;

    if (crat) {
      console.log(crat);
      console.log('i : ', i);

      result += 1;
      console.log('result : ', result);
    }
  }
  return result;
}

console.log(findDivCount(1, 7, 2));
console.log('/******Лічильник!********/');
