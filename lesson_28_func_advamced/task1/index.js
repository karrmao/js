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

const result = calc(3).add(2).mult(4).div(10).subtract(5).result();
console.log(result);
