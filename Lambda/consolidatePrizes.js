function numofPrizes(k, marks) {
  let n = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks.length >= k && marks[i] != 0) {
      return k;
    } else if (marks.length >= k && marks[i] == marks[i + 1]) {
      doubles = [];
      doubles.push[marks[i]];
      console.log(doubles);
    } else if (marks.length <= k) {
      if (marks[i] != marks[i + 1] || marks[i] == marks[i + 1]) {
        return marks.length;
      }
    }
  }
}

console.log(numofPrizes(4, [4, 5, 2, 2, 3, 4, 5]));
