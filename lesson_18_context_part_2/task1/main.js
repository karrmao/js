 const event = {
   guests: [
     { name: 'Bob', email: 'bob@gmail.com', age: 18 },
     { name: 'Kate', email: 'kate@gmail.com', age: 17 },
     { name: 'John', email: 'john@gmail.com', age: 20 },
   ],
   text: 'Welcome to the party!',
   getInvitations() {
     return this.guests
       .filter(({ age }) => age >= 18)
       .map(({ name, email }) => ({
         email,
         message: `Dear ${name}! ${this.message}`,
       }));
   },
 };

 //--data test
 console.log(event.getInvitations());
//=>0: {email: 'bob@gmail.com', message: 'Dear Bob! undefined'}
//  1: {email: 'john@gmail.com', message: 'Dear John! undefined'}
//  length: 2
//  [[Prototype]]: Array(0)