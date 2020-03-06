function collectOddValues(arr) {
  let thatsOdd = [];

  function recursionHelper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) thatsOdd.push(helperInput[0]);
    recurssionHelper(helperInput.slice(1));
  }
  recursionHelper(arr);
  return thatsOdd;
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
