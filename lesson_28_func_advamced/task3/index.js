export const mult = (a) => (b) => a * b;
export const twice = mult(2); //a * 2
export const triple = mult(3); //a * 3

//mult
const firstStep = mult(5);
const result = firstStep(4);
console.log(result); //=>20

//twice
console.log(twice(7)); //=>14

//triple
console.log(triple(9)); //=>27
