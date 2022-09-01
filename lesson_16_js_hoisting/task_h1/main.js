  var arr = [];
  if (!Number.isInteger(num)) {
    return null;
  }

  for (let i = 0; i < num; i++) {
    arr.push(function () {
      return i;
    });
  }
  return arr;
}
console.log(createArrayOfFunctions(5));