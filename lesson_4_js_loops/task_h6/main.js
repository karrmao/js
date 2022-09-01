// put your code here
let result = 0;

for (let i = 1; i <= 1000; i++) {
  result += i;
}

let devNumber = result / 1234;

console.log(Math.trunc(devNumber) > result % 1234) ? true : false;
