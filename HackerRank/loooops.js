function vowelsAndConsonants(s) {
  let newV = "";
  let newC = "";

  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      newV = newV.concat(s[i]);
    } else newC = newC.concat(s[i]);
  }
  let combined = newV + newC;
  for (let i = 0; i < combined.length; i++) {
    console.log(combined[i]);
  }
}

vowelsAndConsonants("javascriptloops");
