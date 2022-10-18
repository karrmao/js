/*export*/ class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return new User('', null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(/*value*/) {
    //value = this.age;
    let value = this.age;
    if (value < 0) {
      return false;
    }
    this.age = value;
    if (value >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }
}

//--test data
//age < 25
const userVasya = new User('Vasya', 17);
console.log(userVasya);
//=> User {name: 'Vasya', age: 17}
userVasya.sayHi();
//=> Hi, I'm Vasya.
userVasya.requestNewPhoto();
//=> New photo request was sent fot Vasya.
console.log(userVasya.setAge());
//=> 17
console.log('***');

//age >= 25
const userAndy = new User('Andy', 25);
userAndy.sayHi();
//=> Hi, I'm Andy.
userAndy.requestNewPhoto();
//=> New photo request was sent fot Andy.
console.log(userAndy.setAge());
//=> New photo request was sent Name
//=> 25
console.log('***');

//age < 0
const userPetya = new User('Petya', -1);
userPetya.sayHi();
//=> Hi, I'm Petya.
userPetya.requestNewPhoto();
//=> New photo request was sent fot Petya.
console.log(userPetya.setAge());
//=> false
console.log('***');

//empty
console.log(User.createEmpty());
//=> User {name: '', age: null}
