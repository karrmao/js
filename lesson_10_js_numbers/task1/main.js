function getFiniteNumbers(copyArr) {
  console.log(copyArr);
  return copyArr.filter((el) => Number.isFinite(el));
}

function getFiniteNumbersV2(copyArr) {
  return copyArr.filter((el) => isFinite(el));
}

function getNaN(copyArr) {
  return copyArr.filter((el) => Number.isNaN(el));
}

function getNaNV2(copyArr) {
  return copyArr.filter((el) => isNaN(el));
}

function getIntegers(copyArr) {
  return copyArr.filter((el) => Number.isInteger(el));
}



//-test data
const arr = [
  2,
  2e64,
  undefined,
  -7,
  'sw100ds',
  Infinity,
  44,
  -Infinity,
  0,
  NaN,
  0.545,
  -0.1,
  'swds',
  null,
  '0.15.15text',
];

console.log('arr :', arr);
//=> [2, 2e+64, undefined, -7, 'sw100ds', Infinity, 44,...
//... -Infinity, 0, NaN, 0.545, -0.1, 'swds', null, '0.15.15text']

console.log('Number.isFinite :', getFiniteNumbers(arr));
//=>[2, 2e+64, -7, 44, 0, 0.545, -0.1]
console.log('isFinite :', getFiniteNumbersV2(arr));
//=>[2, 2e+64, -7, 44, 0, 0.545, -0.1, null]
console.log('Number.isNaN:', getNaN(arr));
//=>[NaN]
console.log('isNaN :', getNaNV2(arr));
//=>[undefined, 'sw100ds', NaN, 'swds', '0.15.15text']
console.log('Number.isInteger :', getIntegers(arr));
//=>[2, 2e+64, -7, 44, 0]
