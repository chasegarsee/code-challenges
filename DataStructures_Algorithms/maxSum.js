const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([2, 3, 4, 5, 6, 7, 8, 100], 2));
