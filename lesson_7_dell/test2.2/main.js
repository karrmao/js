// const user = {
//   name: 'Tom',
//   age: 79,
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
/******************************************************/

// const users = {
//   Tom: 79,
//   Kate: 19,
//   Bob: 17,
// };

// const getAdults = (usersObj) => {
//   const userArray = Object.entries(usersObj);
//   console.log(userArray);

//   const filtredUserArray = userArray.filter((user) => user[1] >= 18);

//   console.log(filtredUserArray); //=> user[1] = age(79,19,17)

//   const userNames = filtredUserArray.map((name) => name[0]);
//   return userNames; //=> user[0] = name('Tom', 'Kate', 'Bob')
//};
/*******************************/
//ref
// const getAdults2 = (usersObj) => {
//   return Object.entries(usersObj)
//     .filter((user) => user[1] >= 18)
//     .map((name) => name[0]);
// };
// //-- data test
// console.log(getAdults2(users));

/*******************************/
// const user = {
//   name: 'Tom',
//   age: 79,
// };

// const { name = 'defalt', ...restProps } = user;
// console.log(Object.entries(restProps));
