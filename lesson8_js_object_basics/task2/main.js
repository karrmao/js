const concatProps = (obj) => {
  const arr = [];

  for (let value in obj) {
    arr.push(obj[value]);
  }

  return arr;
};

//test data
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));
//==> ['John Doe', 17, 'football']
