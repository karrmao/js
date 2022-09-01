//--option1
// function filterNames(arr, text) {
//   function filterNamesCalback(name) {
//     if (name.includes(text) && name.length > 5) {
//       return true;
//     }
//   }
//   return arr.filter(filterNamesCalback);
// }

// //ref1
// function filterNames(arr, text) {
//   return arr.filter(function filterNamesCalback(name) {
//     if (name.includes(text) && name.length > 5) {
//       return true;
//     }
//   });
// }

//ref2
// function filterNames(arr, text) {
//   return arr.filter(function (name) {
//     if (name.includes(text) && name.length > 5) {
//       return true;
//     }
//   });
// }

// //ref3
// function filterNames(arr, text) {
//   return arr.filter((name) => {
//     if (name.includes(text) && name.length > 5) {
//       return true;
//     }
//   });
// }

// //ref3
 function filterNames(arr, text) {
   return arr.filter((name) => {
     return name.includes(text) && name.length > 5;
   });
 }

//ref4
// function filterNames(arr, text) {
//   return arr.filter((name) => name.includes(text) && name.length > 5);
// }

//ref5
// const filterNames = (arr, text) => {
//   return arr.filter((name) => name.includes(text) && name.length > 5);
// };

//ref6
// const filterNames = (arr, text) =>
//   arr.filter((name) => name.includes(text) && name.length > 5);

//--option2;Невірне рішення!!!!

// function filterNames(arr, text) {
//   function filterNamesCalback(name, index) {
//     if (name.includes(text) && index < 5) {
//       return true;
//     }
//   }
//   return arr.filter(filterNamesCalback);
// }

//ref1
// function filterNames(arr, text) {
//   return arr.filter(function filterNamesCalback(name, index) {
//     if (name.includes(text) && index < 5) {
//       return true;
//     }
//   });
// }

//ref2
// function filterNames(arr, text) {
//   return arr.filter((name, index) => {
//     if (name.includes(text) && index < 5) {
//       return true;
//     }
//   });
// }

//ref3
// function filterNames(arr, text) {
//   return arr.filter((name, index) => {
//     return name.includes(text) && index < 5;
//   });
// }

//ref4
// function filterNames(arr, text) {
//   return arr.filter((name, index) => name.includes(text) && index < 5);
// }

//ref5
// const filterNames = (arr, text) =>
//   arr.filter((name, index) => name.includes(text) && index.length < 5);

//example
console.log(
  filterNames(
    ['John', 'Olivya', 'Nastya', 'Tom', 'Hary', 'Vasya', 'Katya'],
    'ya'
  )
); //=>['Olivya', 'Nastya']


