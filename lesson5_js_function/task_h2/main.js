function increaser(a, index) {
  if (a > index) {
    console.log(`a(${a}) + index(${index})`);

    a += index;

    console.log('a =', a);
  }
  return a;
}

console.log(increaser(10, 2));
