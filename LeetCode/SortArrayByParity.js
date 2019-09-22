let sortArrayByParity = function(A) {
  let sorted = [];
  let even = [];
  let odd = [];
  A.map(value => {
    if (value % 2 === 0) {
      even.push(value);
    } else if (value % 2 === 1) {
      odd.push(value);
    }
  });
  sorted = sorted.concat(even, odd);
  return sorted;
};

console.log(sortArrayByParity([1, 2, 3, 4, 5, 6, 7, 8, 9]));
