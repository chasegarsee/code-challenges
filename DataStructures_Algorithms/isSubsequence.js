function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;

  // set up two pointers
  // iterate through the first and check if any of the second is a match
  // if yes go to the next char of the first and loop through the second again
  // if there is a partial match but not the whole thing, start the process overagain
}

console.log(isSubsequence("abc", "akeibjlkec"));
