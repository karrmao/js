//calc(3).add(2).mult(4).div(10).subtract(5).result();
//3+2*4/10-5 = -3

export const calc = (initialValue) => {
  let result = initialValue;

  const calculator = {
    add(number) {
      result += number;
      //return calculator;
      return this;
    },

    mult(number) {
      result *= number;
      //return calculator;
      return this;
    },

    subtract(number) {
      result -= number;
      //return calculator;
      return this;
    },

    div(number) {
      result /= number;
      //return calculator;
      return this;
    },

    result() {
      //return calculator;
      return result;
    },
  };
  return calculator;
};

const resultFirst = calc(3).add(2).mult(4).div(10).subtract(5).result();
console.log(resultFirst); //=> -3

const resultSecond = calc(100).add(500).mult(2).div(1000).subtract(10).result();
console.log(resultSecond); //=> -8.8

const resultThird = calc(10).add(50).mult(2).div(10).subtract(4).result();
console.log(resultThird); //=> 8
