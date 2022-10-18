//-option 1
// const reverseString = (str) => {
//const reverseString = (str) => {
//  if (typeof str !== 'string') {
//    return null;
//  }
//   return str.split('').reverse().join('');
// };

// //-option 2
const reverseString = (str) => {
  if (typeof str !== 'string') {
    return null;
  }
  return [...str].reverse().join('');
};

//-data test
console.log(reverseString('Text')); //=> 'txeT'
console.log(reverseString(4));