const createCalculator = () => {
  let memory = 0;

  function add(num) {
    //console.log('add:', 'memory:', memory, '+', 'num:', num);
    return (memory += num);
  }

  function decrease(num) {
    //console.log('decrease:', 'memory:', memory, '-', 'num:', num);
    return (memory -= num);
  }

  function reset() {
    //console.log('reset:', memory);
    memory = 0;
  }

  function getMemo() {
    //console.log('return memory - getMemo:', memory);
    return memory;
  }

  return { add, decrease, reset, getMemo };
};

// test data
const calculator1 = createCalculator();
const calculator2 = createCalculator();

console.log('***calculator1');
console.log('out1 - decrease:', calculator1.decrease(30)); // 0 - 30
console.log('out1 - getMemo:', calculator1.getMemo()); // -30
console.log('out1 - add:', calculator1.add(25)); // - 30 + 25
console.log('out1 - getMemo:', calculator1.getMemo()); // -5
console.log('out1 - reset:', calculator1.reset()); // undefined
console.log('***');

console.log('***calculator2');
console.log('out2 - add:', calculator2.add(20)); // 0 + 20
console.log('out2 - decrease:', calculator2.decrease(15)); //20 - 15
console.log('out2 - getMemo:', calculator2.getMemo()); // 5
console.log('out2 - reset:', calculator2.reset()); // undefined
console.log('out2 - getMemo:', calculator2.getMemo()); // 0