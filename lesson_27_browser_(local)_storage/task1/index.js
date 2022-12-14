localStorage.clear();
localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('name', 'Tom'); //<= giv ERORR
localStorage.setItem('age', JSON.stringify(17));

/*********************************First*******************************/
// const getLocalStorageData = () => {
//   return Object.entries(localStorage).reduce((acc, [key, value]) => {
//     return {
//       ...acc,
//       [key]: JSON.parse(value),
//     };
//   }, {});
// };

// console.log(getLocalStorageData());
//ERROR
/*********************************Fix ERROR*********************************/
export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    /*********/
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    /*********/
    return {
      ...acc,
      [key]: /**/ newValue /**/,
    };
  }, {});
};

console.log(getLocalStorageData());
//=> {age: 17, name: 'Tom', hobbies: {…}}
//     age: 17
//     hobbies: {name: 'Tom'}
//     name: "Tom"
