function areThereDuplicates(...args) {
  let fCounter = {};
  for (let val of args) {
    if (fCounter[val] > 0) fCounter[val]++;
    else fCounter[val] = 1;
  }
  for (let key in fCounter) {
    if (fCounter[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 3, 2, 6, 5, 4));
