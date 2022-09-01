function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [...arr].reverse((a, b) => a - b);
}

console.log(reverseArray([1, 2, 3, 4, 5]));