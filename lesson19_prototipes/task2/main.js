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


const getOwnProps = (obj) => {
  return Object.keys(obj).filter((el) => typeof obj[el] !== 'function');
};

//test data
console.log(getOwnProps(user));