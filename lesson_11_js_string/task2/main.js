// const contacts = [
//   { name: 'Cicerine', phoneNumber: '666 - 66 - 66' },
//   { name: 'Ann', phoneNumber: '555 - 55 - 55' },
//   { name: 'Bob', phoneNumber: '444 - 44 - 44' },
//   { name: 'Denice', phoneNumber: '333 - 33 - 33' },
// ];

/*********************************************/
//option-1
// const sortContacts = (contacts, ask) => {
//   if (!Array.isArray(contacts)) {
//     return null;
//   }

//   let contactsCopy = contacts.slice();

//   const result = contactsCopy.sort((a, b) => {
//     if (ask === false) {
//       return b.name.localeCompare(a.name);
//     } else {
//       return a.name.localeCompare(b.name);
//     }
//   });
//   return result;
// };

//refactoring
// const sortContacts = (contacts, ask) => {
//   if (!Array.isArray(contacts)) {
//     return null;
//   }

//   return contacts.slice().sort((a, b) => {
//     if (ask === false) {
//       return b.name.localeCompare(a.name);
//     }
//     return a.name.localeCompare(b.name);
//   });
// };
/*********************************************/
// //option-2
// const sortContacts = (contact, isAsc = true) => {
//   if (!Array.isArray(contact)) {
//     return null;
//   }

//   return [...contact].sort((a, b) => {
//     if (isAsc === false) {
//       return b.name.localeCompare(a.name);
//     } else {
//       return a.name.localeCompare(b.name);
//     }
//   });
// };

//--refactoring
// const sortContacts = (contact, isAsc = true) => {
//   if (!Array.isArray(contact)) {
//     return null;
//   }

//   return [...contact].sort((a, b) => {
//     if (isAsc === false) {
//       return b.name.localeCompare(a.name);
//     }
//     return a.name.localeCompare(b.name);
//   });
// };

/*********************************************/
//option-3
//// const sortContacts = (contact, isAsc = true) => {
//   if (!Array.isArray(contact)) {
//     return null;
//   }

//   return [...contact].sort((a, b) => {
//     if (isAsc) {
//       return a.name.localeCompare(b.name);
//     } else {
//       return b.name.localeCompare(a.name);
//     }
//   });
// };

//--refactoring
// const sortContacts = (contact, isAsc = true) => {
//   if (!Array.isArray(contact)) {
//     return null;
//   }

//   return [...contact].sort((a, b) => {
//     if (isAsc) {
//       return a.name.localeCompare(b.name);
//     }
//     return b.name.localeCompare(a.name);
//   });
// };

//--test data
// console.log('true:', sortContacts(contacts, true));
//=>
//   { name: 'Ann', phoneNumber: '555 - 55 - 55' },
//   { name: 'Cicerine', phoneNumber: '666 - 66 - 66' },
//   { name: 'Bob', phoneNumber: '444 - 44 - 44' },
//   { name: 'Denice', phoneNumber: '444 - 44 - 44' },

// console.log('false:', sortContacts(contacts, false));
//=> 
//   { name: 'Denice', phoneNumber: '333 - 33 - 33' },
//   { name: 'Cicerine', phoneNumber: '666 - 66 - 66' },
//   { name: 'Bob', phoneNumber: '444 - 44 - 44' },
//   { name: 'Ann', phoneNumber: '555 - 55 - 55' },

// console.log('default:', sortContacts(contacts));
//=>
//   { name: 'Ann', phoneNumber: '555 - 55 - 55' },
//   { name: 'Cicerine', phoneNumber: '666 - 66 - 66' },
//   { name: 'Bob', phoneNumber: '444 - 44 - 44' },
//   { name: 'Denice', phoneNumber: '333 - 33 - 33' },
/*********************************************/
/*********************************************/
 const contacts = [
   { name: 'Cicerine', phoneNumber: '666 - 66 - 66' },
   { name: 'Ann', phoneNumber: '555 - 55 - 55' },
   { name: 'Bob', phoneNumber: '444 - 44 - 44' },
   { name: 'Denice', phoneNumber: '333 - 33 - 33' },
 ];


 const sortContacts = (contact, ask = true) => {
   if (!Array.isArray(contact)) {
     return null;
   }

   return [...contact].sort((a, b) => {
     if (ask === false) {
       return b.name.localeCompare(a.name);
     } else {
       return a.name.localeCompare(b.name);
     }
   });
 };


//--test data
// console.log('true:', sortContacts(contacts, true));
//=>
//   { name: 'Ann', phoneNumber: '555 - 55 - 55' },
//   { name: 'Cicerine', phoneNumber: '666 - 66 - 66' },
//   { name: 'Bob', phoneNumber: '444 - 44 - 44' },
//   { name: 'Denice', phoneNumber: '444 - 44 - 44' },

// console.log('false:', sortContacts(contacts, false));
//=> 
//   { name: 'Denice', phoneNumber: '333 - 33 - 33' },
//   { name: 'Cicerine', phoneNumber: '666 - 66 - 66' },
//   { name: 'Bob', phoneNumber: '444 - 44 - 44' },
//   { name: 'Ann', phoneNumber: '555 - 55 - 55' },

// console.log('default:', sortContacts(contacts));
//=>
//   { name: 'Ann', phoneNumber: '555 - 55 - 55' },
//   { name: 'Cicerine', phoneNumber: '666 - 66 - 66' },
//   { name: 'Bob', phoneNumber: '444 - 44 - 44' },
//   { name: 'Denice', phoneNumber: '333 - 33 - 33' },