function findNumbers(nums) {
  let even = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 == 0) {
      even.push(nums[i]);
    }
  }
  return even.length;
}
numbers = [1, 22, 30, 1000];

console.log(findNumbers(numbers));
