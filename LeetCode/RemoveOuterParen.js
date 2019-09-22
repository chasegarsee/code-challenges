let removeOuterParentheses = function(S) {
  let output = "";

  let start = 0;
  let counter = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      counter++;
    } else if (S[i] === ")") {
      counter--;
    }

    if (counter === 0) {
      // is primitive
      output = output.concat(S.slice(start + 1, i));
      start = i + 1;
    }
  }

  return output;
};
