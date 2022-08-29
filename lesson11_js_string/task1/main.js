const splitText = (text, length = 10) => {
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
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += length;
  }
  return strArr.join('\n');
};

//--test data
console.log(splitText('abcdefg', 4));
//=>
//Abcd;
//Efg;
console.log(splitText('abcdefgsf'));
//=> Abcdefgsf
console.log(splitText(4));
//=>null