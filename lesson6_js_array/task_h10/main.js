const getSubArray = (arr, numberOfElements) => {
  let resArr = [];
  for (let i = 0; i < numberOfElements; i++) {
    resArr.push(arr[i]);
  }
  return resArr;
};

//--test data
console.log(getSubArray([1, 2, 3, 4], 2)); // [1, 2]
