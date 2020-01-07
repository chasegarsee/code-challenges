function array_diff(a, b) {
  let set = new Set(b);
  return a.filter(i => !set.has(i));
}

first = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9];
second = [2, 5, 7];

console.log(array_diff(first, second));
