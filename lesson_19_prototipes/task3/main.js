// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function () {
//   console.log(`Hi, I'm ${this.name}.`);
// };

// User.prototype.requestNewPhoto = function () {
//   console.log(`New photo request was sent for ${this.name}.`);
// };

// User.prototype.setAge = function () {
//   age = this.age;
//   if (age >= 25) {
//     this.requestNewPhoto();
//     //=> New photo request was sent Name
//   }
//   if (age < 0) {
//     return false;
//   }
//   //if (age > 0) {
//   return age;
//   //}
// };

function User(name, age) {
  this.name = name;
  this.age = age;

  User.prototype.sayHi = function () {
    console.log(`Hi, I'm ${this.name}.`);
  };

  User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}.`);
  };

  User.prototype.setAge = function () {
    age = this.age;
    if (age >= 25) {
      this.requestNewPhoto();
      //=> New photo request was sent Name
    }
    if (age < 0) {
      return false;
    }
    //if (age > 0) {
    return age;
    //}
  };
}

//--test data
//age < 25
const userVasya = new User('Vasya', 17);
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
