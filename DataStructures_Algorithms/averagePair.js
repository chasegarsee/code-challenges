function averagePair(arr, avg) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // keep start at 0 until next goes to the end and check if there is a matching average
    // if not, increment start to the 1, set next to start + 1 and keep going
    let sum = arr[start] + arr[end];
    if (sum / 2 === avg) return true;
    else if (sum / 2 < avg) start++;
    else end--;
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
