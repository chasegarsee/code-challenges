function maxSubArraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length === 0) return null;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13], 3));
