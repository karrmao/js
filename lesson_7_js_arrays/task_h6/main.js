// function sum(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.reduce((acc, numb) => {
//     return acc + numb;
//   });
// }

//ref1
function sum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reduce((acc, numb) => acc + numb);
}

console.log(sum([2, 5, 6, 3, 0, 3, -1])); //=>18
console.log(sum((2, 5, 6, 3, 0, 3, -1))); //=>null