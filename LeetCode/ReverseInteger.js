let reverse = function(x) {
  let reverseNumber = 0;

  if (x > 0) {
    reverseNumber = reverseNumber * 10 + (x % 10);
    x = x / 10;
  }
  return reverseNumber;
};
