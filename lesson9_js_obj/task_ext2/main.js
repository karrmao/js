// function buildObject(keysList, valuesList) {
//   const obj = {};
//   for (let i = 0; i < keysList.length; i++) {
//     obj[keysList[i]] = valuesList[i];
//     console.log('obj :', obj);
//   }
//   return obj;
// }

//-option2
//function buildObject(keysList, valuesList) {
//  return keysList.reduce((obj, key, index) => {
//    return { ...obj, [key]: valuesList[index] };
//  }, {});
//}

//-refactoring
function buildObject(keysList, valuesList) {
  return keysList.reduce(
    (obj, key, index) => ({
      ...obj,
      [key]: valuesList[index],
    }),
    {}
  );
}

//--test data
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
