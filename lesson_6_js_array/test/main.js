// const people = ['Tom', 'Sam', 'John'];
// console.log(people);

// people.unshift('Bill', 'Mike'); // добавляет на початок массива
// console.log(people);

// people.push('Bob', 'Alice'); // добавляет на кінець массива
// console.log(people);

// people.shift(); // удаляет первый элемент массива
// console.log(people);
/************************************************************/

// function getSpecialNumber(from, to) {
//   let specialNumbers = [];
//   for (let i = from; i <= to; i++) {
//     if (i % 3 === 0) {
//       specialNumbers.push(i);
//     }
//   }
//   return specialNumbers;
// }

// console.log(getSpecialNumber(10, 30));

/************************************************************/

//const numbers = [11, 22, 33, 44, 55, 66];

// const a = numbers[0];
// const b = numbers[1];

//console.log(a, b); //=> 11 22

/*********/

// const [a, b, ...arr] = numbers;
// console.log(a, b, arr);

// console.log(a, b, [1, 2, 3, ...arr]);

/************************************************************/

// function swap(arr) {
//   const [start, ...rest] = arr;

//   return [...rest, start];
// }

// console.log(swap(numbers));
