const countOccurrences = (text, str) => {
  if (str === '') return null;

  return text.split(str).length - 1;
};

//--test data
console.log(countOccurrences('ffbeffrgoff', 'f')); //=> 6
console.log(countOccurrences('ffbeffrgoff', '')); //=> null