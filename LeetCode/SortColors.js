let sortColors = function(nums) {
  zero = [];
  one = [];
  two = [];
  sorted = [];
  nums.map(color => {
    if (color === 0) zero.push(color);
    if (color === 1) one.push(color);
    if (color === 2) two.push(color);
  });
  return sorted.concat(zero, one, two);
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));

function sortColorsInPlace(nums) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i - 1] > nums[i]) {
        sorted = false;
        let temp = nums[i - 1];
        nums[i - 1] = nums[i];
        nums[i] = temp;
      }
    }
  }
  return nums;
}

let numbers = [2, 0, 2, 1, 1, 0];
sortColorsInPlace(numbers);
console.log(numbers);
