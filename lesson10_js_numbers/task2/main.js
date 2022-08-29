
function getParsedIntegers(arr) {
  return arr.map((el) => Number.parseInt(el));
}

function getParsedIntegersV2(arr) {
  return arr.map((el) => parseInt(el));
}

function getParsedFloats(arr) {
  return arr.map((el) => Number.parseFloat(el));
}

function getParsedFloatsV2(arr) {
  return arr.map((el) => parseFloat(el));
}

//-test data
const arr = [
  2,
  -0.77,
  100.1,
  '  1 ',
  '14.23abc',
  '0.0123e3',
  '123e-3',
  Infinity,
  true,
  undefined,
  '14.23.25abc',
];

console.log('arr :', arr);
//=>[2, -0.77, 100.1, '  1 ', '14.23abc', '0.0123e3', '123e-3',...
//...Infinity, true, undefined, '14.23.25abc']

console.log('Number.parseInt :', getParsedIntegers(arr));
//=>[2, -0, 100, 1, 14, 0, 123, NaN, NaN, NaN, 14]
console.log('Number.parseInt(2e64) :', Number.parseInt(2e64));
//=> 2
console.log('Number.parseInt(100px) :', Number.parseInt('100px'));
//=> 100
console.log('***');

console.log('parseInt :', getParsedIntegersV2(arr));
//=>[2, -0, 100, 1, 14, 0, 123, NaN, NaN, NaN, 14]
console.log('parseInt(2e64) :', parseInt(2e64)); //=>2
console.log('parseInt(100px) :', parseInt('100px')); //=>100
console.log('***');

console.log('Number.parseFloat :', getParsedFloats(arr));
//=>[2, -0.77, 100.1, 1, 14.23, 12.3, 0.123, Infinity, NaN, NaN, 14.23]
console.log('Number.parseFloat(2e64) :', Number.parseFloat(2e64)); //=>2e+64
console.log('Number.parseFloat(100px) :', Number.parseFloat('100px')); //=>100
console.log('***');

console.log('parseFloat :', getParsedFloatsV2(arr));
//=>[2, -0.77, 100.1, 1, 14.23, 12.3, 0.123, Infinity, NaN, NaN, 14.23]
console.log('parseFloat(2e64) :', parseFloat(2e64)); //=>2e+64
console.log('parseFloat(100px) :', parseFloat('100px')); //=>100
console.log('***');
