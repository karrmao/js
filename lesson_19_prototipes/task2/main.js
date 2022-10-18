const user = {
  name: 'Sahaidachny',
  age: 40,
  type: 'frigate',
  startMatch() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    ship.stop();
  },
};

//--option1
//const getOwnProps = (obj) => {
//  const result = [];
//  for (let key in obj) {
//    //console.log(key);
//    //console.log(obj[key]);
//    if (typeof obj[key] !== 'function') {
//      result.push(key);
//    }
//  }
//  return result;
//};

//--option2
const getOwnProps = (obj) => {
  return Object.keys(obj).filter((el) => typeof obj[el] !== 'function');
};

//test data
console.log(getOwnProps(user));
//=> ['name', 'age', 'type']