const splitString = (text, length = 10) => {
  if (typeof text !== 'string') {
    return null;
  }

  const strArr = [];
  let startPosition = 0;

  while (true) {
    let chunk = text.substr(startPosition, length);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0] + chunk.slice(1).padEnd(length - 1, '.'));
    startPosition += length;
  }

  return strArr;
};

//--test data
const text1 = 'abcdefg';
console.log(splitString(text1, 4)); //=> ['abcd', 'efg.']

const text2 = 'abcdefgsf';
console.log(splitString(text2)); //=>['abcdefgsf.']

const text3 = 'abcd efgh';
console.log(splitString(text3, 4)); //=> ['abcd', ' efg', 'h...']

const text4 = 'abcd efghsdfdslfmkdlsm';
console.log('to: 10', splitString('abcd efghsdfdslfmkdlsm')); //=> ['abcd', ' efg', 'h...']

console.log(splitString(4)); //=> null