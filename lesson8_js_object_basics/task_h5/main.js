const getAdults = (obj) => {
  const result = {};

  for (let el in obj) {
    //console.log(obj[el]);
    if (obj[el] >= 18) {
      result[el] = obj[el];
    }
  }

  return result;
};

//-test data
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
// ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 }));
// ==> { Ann: 56 }
