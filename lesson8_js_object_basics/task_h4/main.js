const pickProps = (obj, props) => {
  const result = {};

  for (let el in obj) {
    if (props.includes(el)) {
      //console.log('key :', el);
      //console.log('value :', obj[el]);

      result[el] = obj[el];
    }
  }
  return result;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']));
// ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']));
// ==> { a: 1, c: 3 }
console.log(
  pickProps({ a: 1, d: 2, c: 3, b: 4, hex: 5 }, ['a', 'c', 'd', 'hex'])
);
// ==> { a: 1, d: 2, 'hex':4}
