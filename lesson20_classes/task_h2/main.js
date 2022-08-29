/*export*/ class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

/*export*/ class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((el) => el.name);
  }

  getUserIds() {
    return this._users.map((el) => el.id);
  }

  getUserNameById(id) {
    return this._users.find((el) => id === el.id).name;
  }
}

//--test data
const user = new User('1', 'Tom', 'session-id');
const userKate = new User('2', 'Kate', '200');
const userJohn = new User('3', 'Kate', '300');
const userOlha = new User('4', 'Kate', '400');
const userAnn = new User('5', 'Kate', '500');
const userOleg = new User('5', 'Kate', '600');

// отримати властивості можемо
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'
// але змінити дані властивості неможливо

user.name = 'Bob'; // намагаємось змінити попереднє значення
console.log(user.name); // ===> 'Tom' - але змінну проігноровано, так як 'setter' відсутній

const usersArr = new UserRepository([
  user,
  userKate,
  userJohn,
  userOlha,
  userAnn,
  userOleg,
]);

console.log(usersArr.getUserNames());
//=> ['Tom', 'Kate', 'Kate', 'Kate', 'Kate', 'Kate']
console.log(usersArr.getUserIds());
//=> ['1', '2', '3', '4', '5', '5']
console.log(usersArr.getUserNameById('2'));
//=> 'Kate'