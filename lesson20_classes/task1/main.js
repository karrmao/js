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

  setAge(value) {
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

// test data
const userJohn = new User('John', 24);
console.log(userJohn);
//=> User {name: 'John', age: 24}
userJohn.requestNewPhoto();
//=> New photo request was sent for John
console.log(userJohn.setAge(30));
//=> New photo request was sent for John
//=> 30
console.log(User.createEmpty());
//=> User {name: '', age: null}