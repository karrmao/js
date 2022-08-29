//-option 1
// const superRound = (num, prec) => {
//   return [
//     Math.floor(num * Math.pow(10, prec)) / Math.pow(10, prec),
//     Math.trunc(num * Math.pow(10, prec)) / Math.pow(10, prec),
//     Math.ceil(num * Math.pow(10, prec)) / Math.pow(10, prec),
//     Math.round(num * Math.pow(10, prec)) / Math.pow(10, prec),
//     Number(num.toFixed(prec)),
//   ];
// };

//-option 2
const superRound = (num, prec) => {
  return [
    Math.floor(num * 10 ** prec) / 10 ** prec,
    Math.trunc(num * 10 ** prec) / 10 ** prec,
    Math.ceil(num * 10 ** prec) / 10 ** prec,
    Math.round(num * 10 ** prec) / 10 ** prec,
    Number(num.toFixed(prec)),
  ];
};

//-test data
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]

