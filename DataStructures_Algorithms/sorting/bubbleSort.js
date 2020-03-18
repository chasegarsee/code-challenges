function bubbleSortNaive(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(
  bubbleSortNaive([99, 34, 21, 53, 56, 67, 12, 76, 266, 54, 23, 76, 29])
);

function bubbleSortOptimized(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(
  bubbleSortOptimized([99, 34, 21, 53, 56, 67, 12, 76, 266, 54, 23, 76, 29])
);
