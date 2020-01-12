function findNumbers(nums) {
  let even = [];

  for (let i = 0; i < nums.length; i++) {
    let issaNumba = nums[i].toString().length;
    console.log(issaNumba);
    if (issaNumba % 2) {
      console.log("found one");
    }
  }
  return even;
}

numbers = [1, 22, 30];

console.log(findNumbers(numbers));
