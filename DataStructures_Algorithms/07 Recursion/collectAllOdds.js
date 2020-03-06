/* HELPER METHOD RECURSION */

function collectOddValues(arr) {
  let thatsOdd = [];

  function recursionHelper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) thatsOdd.push(helperInput[0]);
    recursionHelper(helperInput.slice(1));
  }
  recursionHelper(arr);
  return thatsOdd;
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* PURE RECURSION */

function collectOddValuesPure(arr) {
  let veryOdd = [];
  if (arr.length === 0) return veryOdd;
  if (arr[0] % 2 !== 0) veryOdd.push(arr[0]);

  veryOdd = veryOdd.concat(collectOddValuesPure(arr.slice(1)));
  return veryOdd;
}

console.log(collectOddValuesPure([11, 12, 13, 14, 15, 16, 17, 18]));
