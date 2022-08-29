//Algo
//1. Take keys with Object.keys
//2. Iterate with forEach
//3. Print keys with console.log

function getKeys(obj) {
  Object.keys(obj).forEach((key) => {
    console.log(key);
  });
}

//option-2
// function getKeys(obj) {
//   Object.keys(obj).map((key) => {
//     console.log(key);
//   });
// }

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
