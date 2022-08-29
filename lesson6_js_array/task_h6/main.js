function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let resArr = [];
  for (let el of arr) {
    resArr.push(el);
  }
  return resArr;
}

console.log(cloneArr([1, 2, 3, 4]));
