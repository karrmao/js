const add3 = (value) => value + 3; //3 + 3 = 6
const mult2 = (value) => value * 2; //6 * 2 = 12
const div4 = (value) => value / 4; //12 / 4 = 3
const mult10 = (value) => value * 10; //3 * 10 = 30

export const comprose =
  (...funcs) =>
  (value) => {
    return funcs.reduce((acc, func) => func(acc), value);
  };

const doEverithing = comprose(add3, mult2, div4, mult10);
console.log(doEverithing(3)); //=> 30
