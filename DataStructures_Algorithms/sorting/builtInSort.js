function builtInSort(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}
nums = [44, 65, 12, 45, 76, 12, 34, 66, 123];
console.log(builtInSort(nums));
