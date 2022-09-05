const add3 = (value) => value + 3;
const mult2 = (value) => value * 2;
const div4 = (value) => value / 4;
const mult10 = (value) => value * 10;

export const comprose =
  (...funcs) =>
  (value) => {
    return funcs.reduce((acc, func) => func(acc), value);
  };

const doEverithing = comprose(add3, mult2, div4, mult10);
console.log(doEverithing(3));
