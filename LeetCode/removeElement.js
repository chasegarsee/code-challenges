// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

let removeElement = function(nums, val) {
  while (nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1);
  }
  return nums.length;
};

console.log(removeElement([7, 11, 99, 1, 2, 3, 4, 5, 6, 7, 7, 7], 7));
