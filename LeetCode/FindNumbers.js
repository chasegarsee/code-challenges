function findNumbers(nums) {
  let even = 0;

  nums.forEach(a => {
    if (a.toString().length % 2 == 0) {
      even++;
    }
  });
  return even;
}
numbers = [1, 22, 30, 1000];

console.log(findNumbers(numbers));
