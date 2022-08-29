// const transformToObject = (arr) => {
//   const obj = {};

//   arr.forEach((el) => {
//     obj[el] = el;
//   });

//   return obj;
// };

//option-2

const transformToObject = (arr) => {
  const obj = {};

  arr.map((el) => {
    console.log('el :', el);
    console.log('obj[el] :', obj[el]);

    obj[el] = el;
  });

  return obj;
};

//ref1

// const transformToObject = (arr) => {
//   const obj = {};

//   arr.map((el) => (obj[el] = el));

//   return obj;
// };
//-test data
console.log(transformToObject(['a', 17.1, 'John Doe']));
// ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
