//1. Через квадр дужки (вхідний об'єкт мутує)
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}
//2.Через Object.assign (вхідний об'єкт мутує)
function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}
//3.Через Object.assign зі створенням нового об'єкту(вхідний об'єкт не мутує!!!)
function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

//4.Через через Spred(вхідний об'єкт не мутує!!!)
function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

//--test data
const transaction1 = { value: 100 };
const transaction2 = { value: 200 };
const transaction3 = { value: 300 };
const transaction4 = { value: 400 };

console.log(addPropertyV1(transaction1, 'currency', 'USD'));
// ==> { value: 170, currency: 'USD' }
console.log(transaction1);
console.log('***');

console.log(addPropertyV2(transaction2, 'currency', 'Euro'));
// ==> { value: 170, currency: 'Euro' }
console.log(transaction2);
console.log('***');

console.log(addPropertyV3(transaction3, 'currency', '£'));
// ==> { value: 170, currency: '£' }
console.log(transaction3);
console.log('***');

console.log(addPropertyV4(transaction4, 'currency', '💴'));
//==> { value: 170, currency: '💴' }
console.log(transaction4);
console.log('***');