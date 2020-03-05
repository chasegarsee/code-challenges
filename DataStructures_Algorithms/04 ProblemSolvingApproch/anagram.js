function anagram(str1, str2) {
  // create counter objects for each char in strings
  let fCounter1 = {};
  let fCounter2 = {};
  // add the char count to each respective object

  for (let val of str1) {
    if (fCounter1[val] > 0) fCounter1[val]++;
    else fCounter1[val] = 1;
  }
  for (let val of str2) {
    if (fCounter2[val] > 0) fCounter2[val]++;
    else fCounter2[val] = 1;
  }
  // if both are empty return true else return false
  if (str1 && str2 == "") return true;

  for (let key in fCounter1) {
    if (!(key in fCounter2)) return false;
    if (fCounter2[key] !== fCounter1[key]) return false;
  }
  return true;
  // if one string is less than the other return false
  // loop through Counter1
  // check if all the letters match equally to Counter2
  // if theyre the same return true
  // if not return false
}

console.log(anagram("qazwsxedc", "edcwsxqa"));
