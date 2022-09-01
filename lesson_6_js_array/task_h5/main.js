function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let resArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    resArr.push(arr[i]);
  }
  return resArr;
}

console.log(reverseArray([1, 2, 3, 4]));
