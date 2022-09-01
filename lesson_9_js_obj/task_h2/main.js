function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  //   const addId = { id: userId };
  //   return Object.assign(userData, addId);

  //option-2
  return Object.assign(userData, { id: userId });
}

function addPropertyV3(userData, userId) {
  //   const addId = { id: userId };
  //   return Object.assign({}, userData, addId);

  //option-2
  return Object.assign({}, userData, { id: userId });
}

function addPropertyV4(userData, userId) {
   //option-1
  // const addId = { id: userId };
  // return Object.assign({ ...userData }, addId);

  //option-2
  // return Object.assign({ ...userData }, { id: userId });

  //option-3
  return Object.assign({ ...userData, id: userId });
}

//--test data
const user1 = { name: 'Sam' };
const user2 = { name: 'Josep' };
const user3 = { name: 'Kate' };
const user4 = { name: 'Nikol' };

console.log(addPropertyV1(user1, 1248));
//=>{name: 'Sam', id: 1248}
console.log(user2);
console.log('***');

console.log(addPropertyV2(user2, -1000));
//=> {name: 'Josep', id: -1000}
console.log(user2);
console.log('***');

console.log(addPropertyV3(user3, 'w999'));
//=>{name: 'Kate', id: 'w999'}
console.log(user3);
console.log('***');

console.log(addPropertyV4(user4, false));
//=>{name: 'Nikol', id: 'w999'}
console.log(user4);