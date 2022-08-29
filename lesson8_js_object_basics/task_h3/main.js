function getKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

const object = {
  name: 'Tom',
  lastname: 'Tompson',
  age: 30,
};

console.log(getKeys(object));
