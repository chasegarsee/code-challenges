function same(arr1, arr2) {
  let fc1 = {};
  let fc2 = {};
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let val of arr1) {
    fc1[val] = (fc1[val] || 0) + 1;
  }

  for (let val of arr2) {
    fc2[val] = (fc2[val] || 0) + 1;
  }
  for (let key in fc1) {
    if (!(key ** 2 in fc2)) {
      return false;
    }
    if (fc2[key ** 2] !== fc1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));
