function equalizeArray(arr) {
  arr.sort();
  let biggestDups = [];
  let smallerDups = [];
  let count = 0;
  let prev = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[prev] != arr[i]) {
      prev++;
      count++;
    }
  }
  return count;
}

array = [1, 2, 3, 1, 2, 3, 3, 3];

equalizeArray(array);
