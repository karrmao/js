let memory = 0;

function add(num) {
  return (memory += num);
}

function decrease(num) {
  return (memory -= num);
}

function reset() {
  memory = 0;
}

function getMemo() {
  return memory;
}

console.log('add: 0 +', add(5));
console.log('decrease: 0 +', decrease(1));
console.log('rest: 0 +', reset(3));
console.log('getDemo: 0 +', getMemo(6));
