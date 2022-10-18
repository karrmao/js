const customers = {
  'customer-id-1': {
    name: 'Denice',
    age: 54,
  },
  'customer-id-2': {
    name: 'Cicerone',
    age: 17,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 15,
  },
  'customer-id-4': {
    name: 'Anna',
    age: 55,
  },
};

// const getCustomersList = (obj) => {
//   console.log(obj);

//   const getElem = Object.entries(obj);
//   console.log(getElem);
//   console.log(typeof getElem);

//   const mapArr = getElem.map(([id, customer]) => {
//     console.log('id: ', id);
//     console.log('customer: ', customer);
//     return { id, ...customer };
//   });
//   console.log(mapArr);

//   const cortArr = mapArr.sort((a, b) => a.age - b.age);
// };

//ref
const getCustomersList = (obj) => {
  return Object.entries(obj)
    .map(([id, customer]) => ({
      id,
      ...customer,
    }))
    .sort((a, b) => a.age - b.age);
  //.sort((a, b) => a.name - b.name);
  // .sort((a, b) => a.id - b.id);
};

//console.log(customers);
console.log(getCustomersList(customers));
/*[
  {id: 'customer-id-3', name: 'Bob', age: 15},
  {id: 'customer-id-2', name: 'Cicerone', age: 17},
  {id: 'customer-id-1', name: 'Denice', age: 54},
  {id: 'customer-id-4', name: 'Anna', age: 55},
]*/
