function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (n === arr[i]) return i;
  }
  return -1;
}

console.log(linearSearch([11, 12, 13, 14, 15, 16, 17, 18, 19], 12));
