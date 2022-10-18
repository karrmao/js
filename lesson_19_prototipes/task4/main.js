const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    // const [firstName, lastName] = value.split(' ');
    // this.firstName = firstName;
    // this.lastName = lastName;
    [this.firstName, this.lastName] = value.split(' ');
  },
};

//--data test
console.log(user.fullName); //=> John Doe
console.log(user.firstName); //=> John
console.log(user.lastName); //=> Doe

console.log((user.fullName = 'Bob Dilan'));
//=> Bob Dilan
console.log(user);
//=> {firstName: 'Bob', lastName: 'Dilan'}

console.log((user.fullName = 'Barbra Streisand'));
//=> Barbra Streisand
console.log(user);
//=> {firstName: 'Barbra', lastName: 'Streisand'}