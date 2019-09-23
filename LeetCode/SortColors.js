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
