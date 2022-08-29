// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func.apply(this, arguments, ms));
//   };
// }

// const user1 = {
//   name: 'Paul',
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}`);
//   },
// };

// const defferedHi = defer(user1.sayHi, 1000);
// defferedHi.call({ name: 'Marco' });

//--optin2
function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments, ms));
  };
}

const user1 = {
  name: 'Paul',
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

//-data test
const defferedHi = defer(user1.sayHi, 1000);
defferedHi.apply({ name: 'Marco' });
//=>Hi, I'm Marco