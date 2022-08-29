function getEvenOdd(numb) {
  if (numb % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

const result = getEvenOdd(10);
console.log(result);
