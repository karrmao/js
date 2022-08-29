//Copy Object
const user = {
  Tom: 17,
  Bob: 100,
  Jacob: 32,
};

//-option-1
const copyObj1 = (obj) => Object.assign({}, obj);

//-option-2
const copyObj2 = (obj) => ({ ...obj });

//-test data
console.log(copyObj1(user));
console.log(copyObj2(user));