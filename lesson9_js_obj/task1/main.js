//algoritm
//1. convert object to array
//2. filtred array >= 18
//3. return arr with keys

 const user = {
   Tom: 17,
   'John Doe': 18,
   Bob: 19,
 };

// const getAdults = (userObj) => {
//   const usersArray = Object.entries(userObj);
//   /*1*[['Tom', 17], ['John Doe', 18]['Bob', 19]]*/
//   console.log(usersArray);
//
//   const filtredUsersArray = usersArray.filter((user) => user[1] >= 18);
//   /*2*[ ['John Doe', 18]['Bob', 19]]*/
//   console.log(filtredUsersArray);
//
//   const userNames = filtredUsersArray.map((user) => user[0]);
//   /*3*['John Doe', 'Bob']*/
//
//   return userNames;
// };

//ref-1
 const getAdults = (userObj) => {
   return Object.entries(userObj)
     .filter((user) => user[1] >= 18)
     .map((user) => user[0]);
};

console.log(getAdults(user));
