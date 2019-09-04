let reverse = function(x) {
  let reverse = function(x) {
    let reverseNumber = parseInt(
      Math.abs(x)
        .toString()
        .split("")
        .reverse()
        .join("")
    );

    return reverseNumber > Math.pow(2, 31) - 1
      ? 0
      : x > 0
      ? reverseNumber
      : reverseNumber * -1;
  };
};
