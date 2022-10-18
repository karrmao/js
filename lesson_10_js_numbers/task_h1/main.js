const getTotalPrice = (arr) => {
  return '$' + arr.reduce((acc, el) => Math.floor((acc + el) * 100) / 100);
};

//-option 2
//const getTotalPrice = (arr) => {
//  return '$' + Math.floor(arr.reduce((acc, el) => acc + el) * 100) / 100;
//};

//-option 3
// const getTotalPrice = (arr) => {
//   return '$' + arr.reduce((acc, el) => acc + el).toFixed(2);
// }; //=> $205.30

//-option 4
const getTotalPrice = (arr) =>
  `$${Math.floor(arr.reduce((acc, num) => (acc += num)) * 100) / 100}`;

//-test data
console.log(getTotalPrice([17.159, 88.125, 100.012])); //=> (205.296)=> $205.29