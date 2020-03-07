const bSearch = (sortedArr, value) => {
  let left = 0;
  let right = sortedArr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (sortedArr[middle] !== value) {
    if (value < sortedArr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return middle;
};

const theArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
console.log(bSearch(theArray, 17));
