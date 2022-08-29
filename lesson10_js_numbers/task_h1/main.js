const getTotalPrice = (arr) => {
  return '$' + arr.reduce((acc, el) => Math.floor((acc + el) * 100) / 100);
};

//-option 2
// const getTotalPrice = (arr) => {
//   return '$' + arr.reduce((acc, el) => acc + el).toFixed(2);
// }; //=> $205.30

//-test data
console.log(getTotalPrice([17.159, 88.125, 100.012])); //=> (205.296)=> $205.29