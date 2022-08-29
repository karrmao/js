// const sortDesc = (arr) => {
//   return [...arr].sort((a, b) => b - a);
// };

/**********/
//ref1
 const sortDesc = (arr) => {
   return arr.slice().sort((a, b) => b - a);
 };

 const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 console.log(sortDesc(array));