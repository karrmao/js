const contacts = [
  { name: 'Tom', phoneNumber: '666 - 66 - 66' },
  { name: 'Ann', phoneNumber: '555 - 55 - 55' },
  { name: 'Joseph', phoneNumber: '444 - 44 - 44' },
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

//-option2;
//const sortContacts = (contact, ask = true) => {
//  if (!Array.isArray(contact)) {
//    return null;
//  }
//
//  return [...contact].sort((a, b) => {
//    if (ask) {
//      return a.name.localeCompare(b.name);
//    } else {
//      return b.name.localeCompare(a.name);
//    }
//  });
//};

//--test data
console.log(sortContacts(contacts, true));
//=>
//  {name: 'Ann', phoneNumber: '555 - 55 - 55'}
// {name: 'Joseph', phoneNumber: '444 - 44 - 44'}
// {name: 'Tom', phoneNumber: '666 - 66 - 66'}
console.log(sortContacts(contacts, false));
//=>
// {name: 'Tom', phoneNumber: '666 - 66 - 66'}
// {name: 'Joseph', phoneNumber: '444 - 44 - 44'}
// {name: 'Ann', phoneNumber: '555 - 55 - 55'}
console.log(sortContacts(contacts));
//=> 'Default'
//  {name: 'Ann', phoneNumber: '555 - 55 - 55'}
// {name: 'Joseph', phoneNumber: '444 - 44 - 44'}
// {name: 'Tom', phoneNumber: '666 - 66 - 66'}